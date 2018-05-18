// import './car.scss'
import React from 'react'
import $ from 'jquery'
import Nav from '../like/like.js'
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
                            <span className="ding">
                            <h3>订单日期:<i id="time"></i></h3>
                            <i>订单编号：1233424322342</i>
                            <h4>等待付款</h4>
                            </span>
                                <ul className="newslist01">
                                <li>
                                    <img src="src/components/img/a.jpg"  className="pl"/>
                                    <span className="zi">红米5A2GB内存 银灰16GB</span>
                                </li>

                                    
                                   
                                </ul>
                                <span className="liji">
                                <p>共 件商品：<i>总金额：</i> </p>
                                <input type="button" value="取消订单"/>
                                <input type="button" value="立即付款"/>

                                </span>

                                 <Nav/>
                            </div>

                            <div>
                                <ul className="newslist01">
                                    <span className="emtyTips" ref="emtyTips">
                                        <p className="tipsImg">
                                            <img src='https://s1.mi.com/m/images/m/empty.png' />
                                        </p>
                                            <h1>您还没有 代付款 订单</h1>
                                    </span>
                                   
                                </ul>
                                 <Nav/>
                            </div>
                            <div>
                                <ul className="newslist01">
                                    <span className="emtyTips" ref="emtyTips">
                                        <p className="tipsImg">
                                            <img src='https://s1.mi.com/m/images/m/empty.png' />
                                        </p>
                                            <h1>您还没有 待收货订单</h1>
                                    </span>
                                   
                                </ul>
                                 <Nav/>
                            </div>
                            </div>
                        </div>
                    </div>
               
                </div>
                <Footer/>
            </div>
        )
    }


    componentDidMount(){

        var time = document.getElementById('time');

        autoPlay();
            function autoPlay(){
            //得到运行这行代码时的时间
            //年月日，时分秒，毫秒，星期，时区
            var now = new Date();
        
            // 获取年份:0~11
            var year = now.getFullYear();

            // 获取月份
            var month = now.getMonth()+1;

            // 获取日
            var date = now.getDate();

            // 获取星期：0-6（星期日-星期6）
            // var week = now.getDay();


            // 获取时分秒
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();

            // 补0操作
            h = h<10 ? '0'+h : h;
            m = m<10 ? '0'+m : m;
            s = s<10 ? '0'+s : s;


            // var arr = '日一二三四五六'

            time.innerHTML = year + '/' + month + '/' + date +'&nbsp;'+ h + ':' + m;
        }







    }






}




