import './quit.scss'
import React from 'react'
import {Link}from'react-router'
import $ from 'jquery'
export default class Quit extends React.Component{
    tuichu(){
        this.props.router.push('/')
        window.localStorage.removeItem('un')
        window.localStorage.removeItem('pd')
        window.localStorage.removeItem('mz');
        window.localStorage.removeItem('dizhi');
       $('.w-headlogin').show()
        
        
    }   
    render(){
        return (
            <div className="quit">
                <div className="tuichu1">
                    <Link to="/users"><i className="fa fa-angle-left quit-icon"></i></Link>
                    <input type="button" value="个人中心" className="tuichulogin1"/>
                    <Link to="/search"><i className="fa fa-search quit-icon1"></i></Link>
                </div>
                <div className="manage">
                    <Link to="/shippingAddress"> 
                        <p>地址管理</p>
                        <i className="fa fa-angle-right quit-icon2" ></i>
                    </Link>
                </div>
                <div className="QU-main"></div>
                <div className="tuichu">
                    <input type="button" value="退出账号" className="tuichulogin" onClick={this.tuichu.bind(this)}/>
                </div>
            </div>
        )
    }
}