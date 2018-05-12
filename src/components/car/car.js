import './car.scss'
import React from 'react'
import Footer from '../footer/footer.js'
import {Link}from'react-router'

export default class car extends React.Component{
    render(){
        return (
            <div>
            
            <div className="tou">
            </div>
            <div className="dl">
            <h2>登录后享受更多优惠</h2>
            <span><Link to="/login" >去登录</Link></span>

            </div>
            <div className="gouwu">
            </div>
                <div className="tuijian">
                        <p>猜你喜欢</p>
                        <ul>

                        <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                         <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                          <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                           <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>

                            <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                        </ul>


                        </div>
               <ul className="foot">        
                        <li><Link to="/"><i className="fa fa-home"></i><span>首页</span></Link></li>
                        <li><Link to="/car"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>继续购物</span></Link></li>
                        <li>去结算</li>
                    </ul>
            </div>
        )
    }
}