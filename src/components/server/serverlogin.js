import React from 'react'
import {hashHistory} from 'react-router'
import $ from 'jquery'

import './serverscss/login.scss'

export default class ServerLogin extends React.Component{
    login(){  
        if($('#username').val() == 'admin' && $('#password').val() == 'admin'){
            hashHistory.push('/serverhome')
        } else {
            alert('帐号或密码错误！')
        }
    }   
    render(){
        return (
            <div className="k-box">
                <h1>后台管理系统</h1>
                <div className="k-login">
                    <label>帐号：</label><input type="text" id="username"/><br />
                    <label>密码：</label><input type="password" id="password"/><br />
                    <button onClick={this.login}>登录</button>
                </div>
            </div> 
        ) 
    }
}