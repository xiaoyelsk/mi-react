import './login.scss'
import React from 'react'
import {Link} from 'react-router'
export default class Login extends React.Component{
   constructor(props) {
       super(props)
       this.state = {
            phone:'+86 > 手机号码',
            password:'密码',
            code:'验证码',
            userLogin:'立即登陆/\注册',
            userPassword:'用户名密码登陆'

       }
   }
   change = (e) => {
       console.log(e.target)
       this.setState({phone:e.target.value})
    }
   change1 = (e) => {
    console.log(e.target)
    this.setState({password:e.target.value})
    }
    change2 = (e) => {
        console.log(e.target)
        this.setState({code:e.target.value})
    }
    render(){
        return (
            <div>
                <div className="login" >
                    <div className="mi-login">
                        <img src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png"/>
                        <h5>小米账号登录</h5>
                    </div>
                    <from className="mi-biaodan">
                        <div> <input type="type" className="mi-phone" value={this.state.phone} onChange={this.change}/></div>
                       <br/>
                        <div><input type="type" className="mi-password" value={this.state.password} onChange={this.change1}/></div>
                        <br/>
                        <div> <input type="type" className="mi-code" value={this.state.code} onChange={this.change2}/></div>
                       <br/>
                        
                    </from>
                    
                    <div className="mi-loginBut" >
                        <button className="mi-but1" >{this.state.userLogin}</button><br/>
                        <button className="mi-but2" >{this.state.userPassword}</button>
                    </div>
                    
                    <ul className="mi-xuanze" >
                        <li><Link to="/register"><span>立即注册</span></Link></li>
                        <li className="mi-null"><span>忘记密码</span></li>
                    </ul>
                    <div className="mi-qita" >
                        <img src="./src/components/img/wode11.png" />
                    
                    </div>
                  
                 </div> 
            </div>
        )
    }
}