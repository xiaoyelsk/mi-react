// import './car.scss'
import React from 'react'
import $ from 'jquery'
import Nav from '../c/c.js'
import Footer from '../footer/footer.js'
import './order.scss'


import {Link}from'react-router'

export default class Order extends React.Component{


  componentDidMount(){
    $(document).ready(function(e) {
        $(".tab li").click(function(){
            $(".tab li").eq($(this).index()).addClass("activ").siblings().removeClass("activ");
            $(".tabCon div").hide().eq($(this).index()).show();
        })
    });
  }

    render(){
        return (
            <div className="order ">
                <div className="nav">
                    <ul className="order-header animate-route">
                        <li>
                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </li>
                        <li>我的订单</li>
                        <li>
                             <i className="fa fa-search"></i>
                        </li>  
                    </ul>
                    <div className="warpbox">
                        <div className="table_card">
                            <ul className="tab">
                                <li className="activ">全部</li>
                                <li>待付款</li>
                                <li>待收货</li>
                            </ul>
                        <div className="tabCon">
                            <div className="on">
                                <ul className="newslist01">
                                    <span className="emtyTips" ref="emtyTips">
                                        <p className="tipsImg">
                                            <img src='https://s1.mi.com/m/images/m/empty.png' />
                                        </p>
                                            <h1>您还没有订单</h1>
                                    </span>
                                    <Nav/>
                                </ul>
                            </div>

                            <div >
                                <ul className="newslist01">
                                    <span className="emtyTips" ref="emtyTips">
                                        <p className="tipsImg">
                                            <img src='https://s1.mi.com/m/images/m/empty.png' />
                                        </p>
                                            <h1>您还没有 代付款 订单</h1>
                                    </span>
                                    <Nav/>
                                </ul>
                            </div>
                            <div >
                                <ul className="newslist01">
                                    <span className="emtyTips" ref="emtyTips">
                                        <p className="tipsImg">
                                            <img src='https://s1.mi.com/m/images/m/empty.png' />
                                        </p>
                                            <h1>您还没有 待收货订单</h1>
                                    </span>
                                    <Nav/>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
               
                </div>
                <Footer/>
            </div>
        )
    }
}




