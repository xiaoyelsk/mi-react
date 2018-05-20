// import './car.scss'
import React from 'react'
import $ from 'jquery'
import Nav from '../like/like.js'
import Footer from '../footer/footer.js'
import './order.scss'

import http from '../../utils/httpclient.js'
import {Link}from'react-router'

export default class Order extends React.Component{
    state={
        quan:[],
        fukuan:[],
        shouhuo:[],
        // 保存用户名
        username:''
    }
    componentDidMount(){
        $(document).ready(function(e) {
            $(".tab li").click(function(){
                $(".tab li").eq($(this).index()).addClass("activ").siblings().removeClass("activ");
                $(".tabCon div").hide().eq($(this).index()).show();
            })
        });

        var username = window.localStorage.getItem('un');
        this.setState({username})
        http.post('getorder',{username}).then((res) =>{    
            let quan =[];
            let fukuan=[];
            let shouhuo=[];

            if(res.status){ 
                let data = res.data;
              
                for(var i=0;i<data.length;i++){
                    if(data[i].isPay=='true'){
                        shouhuo.push(data[i])

                    } else if(data[i].isPay=='false'){
                       fukuan.push(data[i])
                    } 

                }    
                    this.setState({
                        fukuan,
                       shouhuo,
                       quan:fukuan.concat(shouhuo),
                      
                    })
                    console.log(this.state.quan)
            }
        })
    }
    del(id){
        http.post('delorder',{id}).then(res=>{
            var username = window.localStorage.getItem('un');
            if(res.status){
                console.log(username)
                http.post('getorder',{username}).then((res) =>{    
                    let quan =[];
                    let fukuan=[];
                    let shouhuo=[];
                    console.log(res)
                    if(res.status){ 
                        let data = res.data;
                      
                        for(var i=0;i<data.length;i++){
                            if(data[i].isPay=='true'){
                                shouhuo.push(data[i])

                            } else if(data[i].isPay=='false'){
                               fukuan.push(data[i])
                            } 

                        }    
                        this.setState({
                            fukuan,
                           shouhuo,
                           quan:fukuan.concat(shouhuo),
                          
                        })
                        console.log(this.state.quan)
                    }
                })
            }
        })
    }
    toUser(){
        this.props.router.push('/users')
    }

    render(){
        return (
            <div className="order ">
                <div className="nav">
                    <ul className="order-header animate-route">
                        <li onClick={this.toUser.bind(this)}>
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
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
                        <div className="on" >
                            {
                                this.state.quan.map((item,idx)=>{
                                    return (
                                        <ul  key={idx}className="newslist01">
                                            <li  className="rt">
                                                <span className="riqi">订单日期{item.time}</span>
                                                <span className="deng">{item.isPay=='true'?'代收货' :'代付款'}</span>
                                                <h2 className="bian">订单编号：{item.orderNumber}</h2>
                                            </li>
                                        {
                                            item.products.map((goods,idx)=>{
                                            return (

                                                <ul key={idx} className="showl">
                                                    <li className="cont">

                                                        <img src={goods.img} className="pl"/>
                                                        <span className="p_names">{goods.p_name} 
                                                            <span className="qty">&times;{goods.qty}
                                                            </span> 
                                                         
                                                        </span>
                                                    </li>  
                                                </ul>
                                                )

                                            })
                                        }
                                            <section className="liji">
                                                <p className="tatol">
                                                    共 {item.totalNums}件商品：总金额:<i>{item.totalPrice}</i>
                                                </p> 
                                                <article className="anniu">
                                                    <input type="button" value="取消订单"className="del" onClick={this.del.bind(this,item._id)}/>
                                                    <input type="button" value="立即付款"/>
                                                </article>
                                            </section>
                                        </ul>
                                    )
                                })
                            } 
                        </div>
                        <div className="box">
                                    {
                                this.state.fukuan.map((item,idx)=>{
                                    return (
                                        <ul  key={idx}className="newslist01">
                                            <li  className="rt">
                                                <span className="riqi">订单日期{item.time}</span>
                                                 <span className="deng">{item.isPay=='false'?'代付款' :'代收货'}</span>
                                                <h2 className="bian">订单编号：{item.orderNumber}</h2>
                                            </li>
                                        {
                                            item.products.map((goods,idx)=>{
                                            return (

                                                <ul key={idx} className="showl">
                                                    <li className="cont">

                                                        <img src={goods.img} className="pl"/>
                                                        <span className="p_names">{goods.p_name} 
                                                            <span className="qty">&times;{goods.qty}
                                                            </span> 
                                                         </span>
                                                    </li>  
                                                </ul>

                                                )

                                            })
                                        }
                                            <section className="liji">
                                                <p className="tatol">
                                                     共 {item.totalNums}件商品：总金额:<i>{item.totalPrice}</i>
                                                </p> 
                                                <article className="anniu">
                                                    <input type="button" value="取消订单"className="del" onClick={this.del.bind(this,item._id)}/>
                                                    <input type="button" value="立即付款"/>
                                                </article>
                                            </section>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                        <div className="box">
                                {
                                this.state.shouhuo.map((item,idx)=>{
                                    return (
                                        <ul  key={idx}className="newslist01">
                                            <li  className="rt">
                                                <span className="riqi">订单日期{item.time}
                                                </span>
                                                    <span className="deng">{item.isPay=='false'?'代付款' :'待收货'}
                                                    </span>
                                                <h2 className="bian">订单编号：{item.orderNumber}</h2>
                                            </li>
                                        {
                                            item.products.map((goods,idx)=>{
                                                return (

                                                    <ul key={idx} className="showl">
                                                        <li className="cont">

                                                            <img src={goods.img} className="pl"/>
                                                            <span className="p_names">{goods.p_name}
                                                                <span className="qty">&times;{goods.qty}
                                                                </span> 
                                                            </span>
                                                        </li>
                                                    </ul>

                                                )

                                            })
                                        }
                                            <section className="liji">
                                                <p className="tatol">
                                                    共 {item.totalNums}件商品：总金额:<i>{item.totalPrice}</i> 
                                                </p> 
                                                <article className="anniu">
                                                     <input type="button" value="取消订单"className="del" onClick={this.del.bind(this,item._id)}/>
                                                     <input type="button" value="立即付款"/>
                                                </article>
                                            </section>
                                        </ul>
                                    )
                                })
                            }
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

