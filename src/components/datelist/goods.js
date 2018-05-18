 import './goods.scss'
import '../../../node_modules/swiper/dist/css/swiper.css'
import ReactDOM from 'react-dom'

import React from 'react'
import Swiper from 'swiper'

import http from '../../utils/httpclient.js'
import {Router,Route, hashHistory, browserHistory,Link} from 'react-router'

export default class Goods extends React.Component{
    state={
           
        img:[],
        p_brief:"",
        p_id:"",
        p_name:"",
        p_price:"",
        type:"",
        text:"",
        goods:[]
    }

    render(){
        return (
            <div>
                <div className="main">
                    <div className="main_t swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.img.map((item,idx)=>{
                                    return  <div className="swiper-slide" key={idx} >
                                        <img src={item}/>
                                            </div>
                                })
                            }

                        </div>
                       <div className="swiper-pagination"></div>
                    </div>
                    <div className="time">
                        <span className="tip">￥{this.state.p_price}
                            <span className="pl">
                                <p>距活动结束</p>
                                <div id="countDown"></div>
                            </span>
                        </span>

                    </div>
                    <div className="show">
                        <h2 className="cont">
                            {this.state.p_name}
                        </h2>
                        <p className="title">{this.state.p_brief}</p>
                        <p className="price">￥{this.state.p_price}</p>

                    </div>
                    <div className="pz">
                        <ul>
                            <li><i>已选</i><span>{this.state.p_name}</span></li>
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
                             {
                            this.state.goods.map((item,idx)=>{
                                return (
                                    <li key={idx}>
                                        <div className="tp">
                                            <img src={item.img_url}/>
                                        </div>
                                        <div className="t-info">
                                            <h4>{item.type}</h4>
                                         
                                            <span>￥{item.product_id}元</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
          
                <ul className="foot">        
                    <li><Link to="/"><i className="fa fa-home"></i><span>首页</span></Link></li>
                    <li><Link to="/car"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>购物车</span></Link></li>
                     <li onClick={this.toCar.bind(this)}>加入购物车</li>

                </ul>      
            </div>

        )
    }
    componentDidMount(){
        var countDown = document.getElementById('countDown');
        var end = Date.parse('2018-05-18 15:50:20');
        showTime();
        var timer = setInterval(showTime,1000);
        function showTime(){
            // 获取当前时间
            var now = Date.now();
            // 计算差值
            var offset = Math.floor((end - now)/1000);//毫秒
            // 把时间转换成：xx天xx时xx分xx秒
           
            if(offset <= 0){
                // 清除定时器
                clearInterval(timer);
                // 隐藏倒计时
                countDown.style.display = 'none';
            }
            var sec = offset%60;
            var min = Math.floor(offset/60)%60;
            var hour = Math.floor(offset/60/60)%24;
            var day = Math.floor(offset/60/60/24);

            sec = sec<10? '0'+sec : sec;
            min = min<10? '0'+min : min;
            hour = hour<10? '0'+hour : hour;
            // day = day<10? '0'+day : day;

            countDown.innerHTML = day + '天' + hour + ':'+ min + ':' + sec;
        }
        // 获取列表传过来的参数
        let id = this.props.params.product_id;
            console.log(id)
          http.post('getproduct',{id}).then((res)=>{
                console.log (res)
            if(res.status){
               this.setState({
                    img:[
                        res.data[0].img_url,
                        res.data[0].img_url2
                    ],
                    p_brief:res.data[0].product_brief,
                    p_name:res.data[0].product_name,
                    p_id:res.data[0].product_id,
                    p_price:res.data[0].product_price
               })

            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop:true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                  clickable :true,
                }
            });
            }

          })



          http.post('getproduct').then((res)=>{
             this.setState({
                    goods:res.data
                })
            let datal = res.data;

            let pro = [];
         
                for(var i=0;i<datal.length;i++){
                    // let type_text = data[i].type_text;
                    if(datal[i].type_text == "路由"){
                        pro.push(datal[i]);
                    }
                }
                this.goods=pro;
                // console.log(this.goods)
          })

    }
    toCar(){

        let user=window.localStorage.getItem("un");
                // this.props.router.push('/car/'+ p_id);
                // console.log(p_id)
           let data = {
                    img:this.state.img[0],
                    qty:1,
                    p_name:this.state.p_name,
                    p_id:this.state.p_id,
                    p_price:this.state.p_price,
                    username:user,
                    isSelected:true
              }  
          
                console.log(data)
            http.post('addProductCar',data).then((res)=>{

                console.log(res)

            })
    }








}
