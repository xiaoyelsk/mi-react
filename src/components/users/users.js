import './users.scss'
import React from 'react'
import {Link} from 'react-router'
import Footer from '../footer/footer.js'
import $ from 'jquery'


export default class users extends React.Component{
    componentDidMount(){
        $('.users').addClass('ative').siblings('a').removeClass('ative')
    }
    render(){
        return (
            <div>
                <div className="w-header">
                        <div className="w-headportrait">
                            <img src="https://s1.mi.com/m/images/m/default.png" className="w-tou" />
                        </div>
                        <div className="w-headlogin">
                            <Link to="/login"><span>登陆\ </span> </Link>
                            <Link to="/register"><span>注册</span></Link>
                        </div>
                </div>
                <div className="wo-main">
                    <div className="w-indent">
                        <div className="w-dingdan">我的订单<span className="w-alldingdan">全部订单<i className="fa fa-angle-double-right" ></i></span></div>
                    </div>
                    <ul className="w-fukuan">
                        <li>
                            <img src="./src/components/img/wode7.png" />
                            <span>待付款</span>
                        </li>
                        <li>
                            <img src="./src/components/img/wode8.png" />
                            <span>待收货</span>
                        </li> 
                        <li>
                            <img src="./src/components/img/wode9.png" />
                            <span>退换修</span>
                        </li> 
                    </ul>
                    <ul className="w-huiyuan w-xiangtong">
                        <li className="w-bb">
                            <img src="./src/components/img/wode1.png" />
                            <div>会员中心<i className="fa fa-angle-double-right" ></i></div>
                            
                        </li>
                        <li>
                            <img src="./src/components/img/wode2.png" />
                            <div>我的优惠 <i className="fa fa-angle-double-right" ></i></div>
                           
                        </li> 
                    </ul>
                    <ul className="w-fuwu w-xiangtong">
                        <li className="w-bb" >
                            <img src="./src/components/img/wode3.png" />
                            <div>服务中心<i className="fa fa-angle-double-right" ></i></div>
                            
                        </li>
                            <li>
                                <img src="./src/components/img/wode4.png" />
                                <div>小米之家<i className="fa fa-angle-double-right" ></i></div>
                                
                            </li> 
                    </ul>
                    <div className="w-pipe w-xiangtong2">
                            <li>
                                <img src="./src/components/img/wode5.png" />
                                <div>F码通道<i className="fa fa-angle-double-right" ></i></div>
                                
                            </li> 
                    </div>
                    <div className="w-setting w-xiangtong2">
                            <li>
                                <img src="./src/components/img/wode6.png" />
                                <div>设置<i className="fa fa-angle-double-right shezhi" ></i></div>
                               
                            </li> 
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}