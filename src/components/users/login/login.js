import './login.scss'
import React from 'react'
import {Link} from 'react-router'
import http from '../../../utils/httpclient'
import $ from 'jquery'
import  './gVerify'


export default class Login extends React.Component{
      //懒加载 js $(".lan").delay(800).hide(0); 
    // html
    // <div className="lan">
    //   <i className="fa fa-spinner fa-pulse"></i>	
    // </div>
   constructor(props) {
       super(props)
       this.state = {
            phone:' 手机号码',
            password:'密码',
            code:'验证码',
            userLogin:'登陆',
            userPassword:'用户名密码登陆',
            tishi:'',
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
    change2 = (e) => {
        // console.log(e.target)验证码
        this.setState({code:e.target.value})
    }
   
    mima(){
        // console.log(this) 
        // 字体内容改变
        this.refs.quhao.innerHTML='',
        this.setState({ userLogin:'登陆'})
        this.setState({ phone:'邮箱/手机号码/小米ID '})
    }
   
    componentDidMount(){
        //验证码的生成 
          var verifyCode = new GVerify("v_container");
            document.getElementById("mi-but1").onclick = ()=>{
               var result = verifyCode.validate(document.getElementById("mi-code").value);
                   //字体内容改变
                    this.refs.quhao.innerHTML='+ 86  >',
                    this.setState({ userLogin:'立即登陆/\注册'})
                    this.setState({ phone:'手机号码 '})
                    // // 判断
                    // console.log(this.refs.phone.value)
                    if(this.refs.phone.value==''){
                            this.setState({ tishi:'请输入手机号码! '})
                            return;

                    }else if(this.refs.psd.value==''){
                            this.setState({ tishi:'请输入密码! '})
                            return;  
                    }
                    // 连接后端
                    let data = {
                        username:this.refs.phone.value,
                        password:this.refs.psd.value
                    }
                    // console.log(data)
                    http.post('login',data).then((res)=>{
                        console.log(res)
                        
                        //token(写进本地)
                        window.localStorage.setItem('un',res.data.username);
                        window.localStorage.setItem('token',res.data.token);
                        //判断验证码和请求的状态
                        if(result && res.status){
                            this.props.router.push('/')
                        }else{
                            alert("用户名或密码错误或验证码错误！！！");
                        }
                        
                    })
      }
        
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
                        <div>
                            <span className="mi-quhao" ref="quhao">+ 86  ></span> 
                            <input type="type" className="mi-phone"  placeholder={this.state.phone} onChange={this.change} ref="phone"/>
                        </div>
                       <br/>
                       <p className="mi-tishi1">{this.state.tishi}</p>
                        <div className="mi-mima1" >
                            <p><input type="password" className="mi-password" placeholder={this.state.password} onChange={this.change1} ref="psd"/></p>
                        </div>
                        <br/>
                        
                        <div> 
                            <input type="type" id="mi-code" className="mi-code" placeholder={this.state.code} onChange={this.change2} ref="code"/>
                            <span id="v_container" className="mi-Scode"></span>                                                                        
                        </div>               
                       <br/>
                       <p className="mi-tishi2">{this.state.tishi2}</p>
                        
                    </from>
                    
                    <div className="mi-loginBut" >
                        <button className="mi-but1" id="mi-but1" >{this.state.userLogin}</button><br/>
                        <button className="mi-but2" onClick={this.mima.bind(this)}>{this.state.userPassword}</button>
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