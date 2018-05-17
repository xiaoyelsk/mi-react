import './shippingAddress.scss'
import React from 'react'
import $ from 'jquery'


import {Link}from'react-router'

export default class ShippingAddress extends React.Component{
    Address(){

    }
    render(){
        return (
                <div className="shippingAddress">
                        <div className="SA-head">
                            <Link to="/quit"><i className="fa fa-angle-left quit-icon"></i></Link>
                            <input type="button" value="收货地址" className="tuichulogin1"/>  
                        </div>
                        <div className="SA-main"></div>
                        <div className="SA-foot">
                                <Link to="/SAconsig">
                                    <input type="button" value="新建地址" className="SA-footAdd" onClick={this.Address.bind(this)}/>
                                </Link>
                        </div>
                </div>
        )
    }
}