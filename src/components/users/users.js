import './users.scss'
import React from 'react'
import {Link} from 'react-router'
import Footer from '../footer/footer.js'
import $ from 'jquery'


export default class users extends React.Component{
    state = {
        login:'',
    }
    componentDidMount(){
        $('.users').addClass('ative').siblings('a').removeClass('ative')
       
        // 登陆用户的写入
            this.un = window.localStorage.getItem('un')
            this.pd = window.localStorage.getItem('pd')
            
            console.log(this.un)
            this.setState({login:this.un})
            this.setState({register:''})
            
    }
   
    render(){
        return (
            <div>
                <div className="w-header">
                        <div className="w-headportrait">
                            <img src="https://s1.mi.com/m/images/m/default.png" className="w-tou" />
                        </div>
                        <div className="w-headlogin1"><span>{this.state.login}</span></div>
                        <div className="w-headlogin">
                            <Link to="/login"><span>登陆\</span> </Link>
                            <Link to="/register"><span>注册</span></Link>
                        </div>
                </div>
                <div className="wo-main">
                    <div className="w-indent">
                        <div className="w-dingdan">我的订单<span className="w-alldingdan">全部订单<i className="fa fa-angle-right youjiantou"></i></span></div>
                    </div>
                    <ul className="w-fukuan">
                        <li>
                          <i className="fa fa-window-maximize zibig"></i>
                            <span>待付款</span>
                        </li>
                        <li>
                          <i className="fa fa-truck zibig " ></i>
                            <span>待收货</span>
                        </li> 
                        <li>
                        <i className="fa fa-wrench zibig"></i>
                            <span>退换修</span>
                        </li> 
                    </ul>
                    <ul className="w-huiyuan w-xiangtong zibig">
                        <li className="w-bb">
                            <i className="fa fa-user-o zibig" ></i>
                            <div>会员中心<i className="fa fa-angle-right"></i></div>
                            
                        </li>
                        <li>
                           <i className="fa fa-window-maximize zibig"></i>
                            <div>我的优惠 <i className="fa fa-angle-right"></i></div>
                           
                        </li> 
                    </ul>
                    <ul className="w-fuwu w-xiangtong">
                        <li className="w-bb" >
                           <i className="fa fa-heartbeat zibig" ></i>
                            <div>服务中心<i className="fa fa-angle-right"></i></div>
                            
                        </li>
                            <li>
                               <i className="fa fa-home zibig"></i>
                                <div>小米之家<i className="fa fa-angle-right"></i></div>
                                
                            </li> 
                    </ul>
                    <div className="w-pipe w-xiangtong2">
                            <li>
                               <i className="fa fa-square-o zibig " ></i>
                                <div>F码通道<i className="fa fa-angle-right"></i></div>
                                
                            </li> 
                    </div>
                    <div className="w-setting w-xiangtong2">
                            <li>
                                <i className="fa fa-cog zibig" ></i>
                                <Link to="/quit" className="U-aa">
                                    <div>
                                            设置
                                            <i className="fa fa-angle-right shezhi"></i>
                                    </div> 
                                 </Link> 
                            </li> 
                    </div>
                    
                </div>
                <Footer />

            </div>
        )
    }
}