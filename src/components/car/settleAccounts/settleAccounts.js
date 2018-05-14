import './settleAccounts.scss' 
import React from 'react'
import {Link} from 'react-router'

export default class SettleAccounts extends React.Component{
    
    render(){
        return (
            <div className="settleAccounts">
                <div className="settle-head">
                    <p><Link to='/car'><i className="fa fa-angle-left jiesuan"></i></Link><span>用户结算</span></p> 
                </div>
                <div className="settle-main">
                    <div className="settle-shouhuo">
                        <h5>添加收货地址<Link to='/consig'><i className="fa fa-angle-right shouhuo"></i></Link></h5>  
                    </div>
                    <div className="settle-zhifu">
                        <ul className="settle-zffs">
                            <li>
                                <span>微信支付</span>
                                <input type="radio" className="danxuan" name="danxuan" />
                            </li>
                            <li>
                                <span>支付宝</span><span className="beizhu">支付订单，赢1999元红包</span>
                                <input type="radio" className="danxuan" name="danxuan" />
                            </li>
                            <li>
                                <span>小米钱包</span><span className="beizhu">绑新卡支付，享最高立减99元</span>
                                <input type="radio" className="danxuan" name="danxuan" />
                            </li>
                            <li>
                                <span>银联在线支付</span>
                                <input type="radio" className="danxuan" name="danxuan" />
                            </li>
                            <li>
                                <span>翼支付</span>
                                <input type="radio" className="danxuan" name="danxuan" />
                            </li>
                            <li>
                                <span>小米分期</span>
                                <input type="radio" className="danxuan" name="danxuan" />
                            </li>
                            <li>
                                <span>花呗分期</span>
                                <input type="radio" className="danxuan" name="danxuan" />
                            </li>
                                <p> 收起其他付款方式<i className="fa fa-chevron-down"></i></p>
                        </ul>
                    </div>
                    <div className="settle-peisong">
                        <ul>
                            <li>
                                <span>快递配送(免运费)</span>
                                <span className="xuanxiang1">不限送货时间</span>
                                <i className="fa fa-chevron-down" ></i>
                            </li>
                            <li>
                                <span>电子发票</span>
                                <span className="xuanxiang2">个人</span>
                                <i className="fa fa-chevron-down" ></i>
                            </li>
                            <li>
                                <span>优惠券</span>
                                <span className="xuanxiang3">已优惠<span>0元</span></span>
                                <i className="fa fa-chevron-down" ></i>
                            </li>
                        </ul>
                    </div>
                    <div className="settle-productxinxi">
                        <ul>
                            <li>
                                <img/>
                                <span className="content"></span>
                                <span className="price"></span>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="settle-settlexinxi" >
                        <ul>
                            <li>商品价格:</li>
                            <li>已优惠:0.00</li>
                            <li>配送费用:0.00</li>
                        </ul>
                    </div>
                    
                    
                </div>
                <div className="settle-gofukuan" >
                        <div className="settle-goleft">
                            <span>共 件</span> <span>合计:</span>
                        </div>
                        <div className="settle-goright">
                           去付款
                        </div>
                    </div>
            </div>
        )
    }
}