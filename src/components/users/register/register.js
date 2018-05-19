import './register.scss'

import React from 'react'
import {Link} from 'react-router'
import http from '../../../utils/httpclient'



export default class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
             phone:'手机号码',
             password:'密码',
             zhuce:'注册',
             tishi:''
        }
    }
    
    change = (e) => {
        //    console.log(e.target)手机号码
           this.setState({phone:e.target.value})
        }
    change1 = (e) => {
        // console.log(e.target)密码
        this.setState({password:e.target.value})
        }
    zhucebut(){
            console.log(this.refs.checkbox.checked) 
            if(this.refs.phone.value==''){
                this.setState({ tishi:'请输入手机号码! '})
                return;
            }else if(!/^1[3-8]\d{9}$/i.test(this.refs.phone.value)){
                this.setState({ tishi:'手机不合法! '})
                return;
            }else if(this.refs.psd.value==''){
                this.setState({ tishi:'请输入密码! '})
                return;
            }else if(!/^[^\s]{5,19}$/.test(this.refs.psd.value)){
                this.setState({ tishi:'密码不合法! '})
                return;
            }else if(this.refs.checkbox.checked==''){
                this.setState({ tishi:'请勾选协议! '})
                return;
            }
            let data = {
                username:this.refs.phone.value,
                password:this.refs.psd.value
            }
            console.log(data)
            http.post('register',data).then((res)=>{
                if(res.status){
                    this.props.router.push('/login')
                } else {
                    alert('手机号码已被注册！')
                }
            })
            
            // this.props.router.push('/')
               
         }   
    render(){
        return (
            <div>
                <div className="register" >
                    <h3>注册小米账号</h3>
                    <from className="mi-register">

                        <div>
                            <span className="mi-quhao" ref="quhao">+ 86  ></span> 
                            <input type="type" className="mi-phone"  placeholder={this.state.phone} onChange={this.change} ref="phone"/>
                        </div>
                        <br/>
                        <div>
                            <input type="password" className="mi-password" placeholder={this.state.password} onChange={this.change1} ref="psd"/>                        
                        </div>
                        <br/>
                        <p className="mi-tishi">{this.state.tishi}</p>
                        <p className="mi-loginBut" >
                            <button className="mi-but1" onClick={this.zhucebut.bind(this)}>{this.state.zhuce}</button><br/> 
                        </p>
                        <p className="mi-check" >
                            <input type="checkbox" className="mi-checkbox" ref="checkbox"/><span className="mi-xieyi">注册账号证明您同意并愿意遵守小米<Link><u>用户协议</u></Link>和<Link><u>隐私政策</u></Link></span>
                        </p>
                    </from>
                    <div>
                        <ul className="mi-nav" >
                            <li><Link to="/"><span>首页</span></Link></li>
                            <li><Link><span>简体</span></Link></li>
                            <li><Link><span>繁体</span></Link></li>
                            <li><Link><span>English</span></Link></li>
                            <li className="mi-wenti" ><Link><span>常见问题</span></Link></li> 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}