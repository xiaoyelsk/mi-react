import './goods.scss'

import React from 'react'

import {Link} from 'react-router'

import './daojishi.js'

export default class Goods extends React.Component{
    render(){
        return (
            <div>
                <div className="main">
                    <div className="main_t">
                    </div>
                    <div className="time">
                        <span className="tip">￥1599
                            <span className="pl">
                                <p>距活动结束</p>
                                <div id="countDown"></div>
                            </span>
                        </span>

                    </div>
                    <div className="show">
                        <h2 className="cont">小米</h2>
                        <p className="title">[5月18日上午10点 开售]前置2000万“治愈系”自拍/后置2000万 AI双摄/标配骁龙660 AIE处理器</p>
                        <p className="price">￥1599</p>

                    </div>
                    <div className="pz">
                        <ul>
                            <li><i>已选</i><span>小米6X 4GB+64GB 冰蓝x1</span></li>
                            <li><i>送至</i><span>北京市 东城区</span></li>
                            <li><span>7天无理由退货 &nbsp;   15天质量问题换货&nbsp;     365天保修</span> </li>
                        </ul>
                    </div>
                    <div className="pl">
                        <img src="src/components/img/pl.png"/>
                    </div>
                    <div className="gs">
                        <h3>概述</h3>
                        <img src="src/components/img/da.jpg"/>
                        <ul className="ull">
                            <li><span>后置2000万AI双摄</span><p>白天夜晚都清晰</p>
                            </li>
                             <li><span>标配骁龙660AIE处理器</span><p>旗舰性能</p>
                            </li>
                            <li><span>前置2000万“治愈系”自拍</span><p>一拍就有好心情</p>
                            </li>
                            <li><span>最高可选6GB+128GB</span><p>可容3万张照片，随时翻阅</p>
                            </li>
                            <li><span>前置2000万“治愈系”自拍</span><p>一拍就有好心情</p>
                            </li>
                            <li><span>前置2000万“治愈系”自拍</span><p>一拍就有好心情</p>
                            </li>
                        </ul>  
                    </div>
                    <div className="sj">
                        <h2>“杨柳腰” 纤薄机身<br/>
                        盈盈一握，怦然心动
                        </h2>
                        <p>精致纤薄“杨柳腰”收弧设计，精雕细琢的全金属机身，细腻饱满的磨砂质感，入手瞬间便已怦然心动</p>
                    </div>
                    <div className="tuijian">
                        <p>为你推荐</p>
                        <ul>
                            <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                            <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                            <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                            <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                            <li><img src="src/components/img/a.jpg"/><h4>小米5x64GB</h4><span>￥1499</span></li>
                        </ul>
                    </div>
                </div>
          
                <ul className="foot">        
                    <li><Link to="/"><i className="fa fa-home"></i><span>首页</span></Link></li>
                    <li><Link to="/car"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>购物车</span></Link></li>
                     <li>加入购物车</li>
                </ul>      
            </div>

        )
    }
}

// import lunbo from './lunbo.js'