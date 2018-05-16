import React from 'react'
import $ from 'jquery'

import Footer from '../footer/footer.js'
import './index.scss'

// 引入swiper模块、css
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
// 引入httpclient模块
import http from '../../utils/httpclient.js'

export default class Index extends React.Component{
    // 跳到列表
    toList(){
        this.props.router.push('/list');
    }
    // 跳到详情
    toDetails(product_id){
        this.props.router.push('/goods/'+product_id);
    }

    state = {
        // 轮播图数据
        bannerImg:[],
        // 导航栏数据
        navImg:[],
        // 通道数据 
        channel:[],
        // 每日精选 == 列表的手机
        dailySelection:{
            bigImg:[],
            productData:[]
        },
        // 超值推荐 == 分类的新品
        recommend:{
            bigImg:[],
            productData:[]
        },
        // 明星单品 == 列表的路由
        starSingle:{
            bigImg:[],
            productData:[]
        },
        // 新品上线 == 列表的家电
        newProduct:{
            bigImg:[],
            productData:[]
        },
        // 米家智能 == 列表的智能
        miIntelligence:{
            bigImg:[],
            productData:[]
        },
        // 小米电视 == 列表的电视
        miTelevision:{
            bigImg:[],
            productData:[]
        },
        miProduct:[]
    }

    componentDidMount(){
        $('.home').addClass('ative').siblings('a').removeClass('ative')

        // 获取后端数据
        http.post('getProduct',{}).then(res=>{
            if(res.status){
                // 数据源
                let data = res.data;
                // 轮播图
                let banner = [];
                // 导航栏
                let nav = [];
                // 通道
                let channel = [];
                // 每日精选
                let daily = []
                let dBig = [];
                let dProduct = [];
                // 超值推荐
                let recom = []
                let rBig = [];
                let rProduct = [];
                // 明星单品
                let star = []
                let sBig = [];
                let sProduct = []; 
                // 新品上线
                let newPro = []
                let nBig = [];
                let nProduct = [];
                // 米家智能
                let miIt = []
                let mBig = [];
                let mProduct = [];
                // 米家智能
                let tv = []
                let tBig = [];
                let tProduct = [];
                // 全部产品
                let miProduct = []
                
                // 
                // 对数据数据进行判断
                for(var i=0;i<data.length;i++){
                    let type = data[i].type;
                    if(type == 'banner'){
                        banner.push(data[i])
                    }else if(type == 'nav'){
                        nav.push(data[i])
                    }else if(type == 'chanel' ){
                        channel.push(data[i])
                    }else if(type == 'dailySelection'){
                        daily.push(data[i]) 
                    }else if(type == 'recommend'){
                        recom.push(data[i])
                    }else if(type == 'starSingle'){
                        star.push(data[i])
                    }else if(type == 'newProduct'){
                        newPro.push(data[i])
                    }else if(type == 'miIntelligence'){
                        miIt.push(data[i])
                    }else if(type == 'miTelevision'){
                        tv.push(data[i])
                    }else if(type == 'miProduct'){
                        miProduct.push(data[i])
                    }
                }
                // 封一个对数据二次抽取的函数
                function getData(totall,big,product){
                    for(var i=0;i<totall.length;i++){
                        if(i<2){
                            big.push(totall[i]) 
                        }else{
                            product.push(totall[i])
                        }
                    }
                }
                getData(daily,dBig,dProduct);
                getData(recom,rBig,rProduct);
                getData(star,sBig,sProduct);
                getData(newPro,nBig,nProduct);
                getData(miIt,mBig,mProduct);
                getData(tv,tBig,tProduct);
                this.setState({
                    bannerImg:banner,
                    navImg:nav,
                    channel:channel,
                    dailySelection:{bigImg:dBig,productData:dProduct},
                    recommend:{bigImg:rBig,productData:rProduct},
                    starSingle:{bigImg:sBig,productData:sProduct},
                    newProduct:{bigImg:nBig,productData:nProduct},
                    miIntelligence:{bigImg:mBig,productData:mProduct},
                    miTelevision:{bigImg:tBig,productData:tProduct},
                    miProduct

                })
                
                // 轮播图:swiper
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
    }

    render(){
        let isEmty = this.state.miIntelligence.productData.length;
        return (
            <div id="index">
                <ul className="index-header animate-route">
                    <li><img src='src/components/img/logo.png'/></li>
                    <li>
                        <i className="fa fa-search fdj" aria-hidden="true"></i>
                        <input type="text" className="f-search" placeholder="搜索商品" />
                    </li>
                    <li><i className="fa fa-user-o" aria-hidden="true"></i></li>
                </ul>
                <div className="index-main animate-route">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.bannerImg.map((item,idx)=>{
                                    return  <div className="swiper-slide" key={idx} onClick={this.toList.bind(this)}>
                                                <img src={item.img_url}/>
                                            </div>
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                    <ul className="f-nav">
                        {
                            this.state.navImg.map((item,idx)=>{
                                return <li key={idx} onClick={this.toList.bind(this)}><img src={item.img_url}/></li>
                            })
                        }
                    </ul>

                    <div className="f-channel" onClick={this.toList.bind(this)}>
                        <div className="channel-l channel-box" >
                            <img src={this.state.channel.length>0 ? this.state.channel[0].img_url : ''}/>
                        </div>
                        <ul className="channel-r channel-box">
                            <li><img src={this.state.channel.length>0 ? this.state.channel[1].img_url:''}  /></li>
                            <li><img src={this.state.channel.length>0 ? this.state.channel[2].img_url:''}  /></li>
                        </ul>
                    </div>

                    <div className="f-dailySelection f-doubleStyle">
                        {
                            this.state.dailySelection.bigImg.map((item,idx)=>{
                                return <div className="f-big" key={idx}><img src={item.img_url} onClick={this.toList.bind(this)}/></div>
                            })
                        }
                        <ul className="products">
                            {this.state.dailySelection.productData.map((item,idx)=>{
                                return  <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                            <img src={item.img_url}/>
                                            <div className="f-info">
                                                <p className="name">{item.product_name}</p>
                                                <p className="brief">{item.product_brief}</p>
                                                <p className="price">￥{item.product_price}</p>
                                            </div>
                                        </li>
                            })}
                        </ul>
                    </div>

                    <div className="f-recommend f-doubleStyle">
                        {
                            this.state.recommend.bigImg.map((item,idx)=>{
                                return <div className="f-big" key={idx}><img src={item.img_url} onClick={this.toList.bind(this)}/></div>
                            })
                        }
                        <ul className="products">
                            {this.state.recommend.productData.map((item,idx)=>{
                                return  <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                            <img src={item.img_url}/>
                                            <div className="f-info">
                                                <p className="name">{item.product_name}</p>
                                                <p className="brief">{item.product_brief}</p>
                                                <p className="price">￥{item.product_price}</p>
                                            </div>
                                        </li>
                            })}
                        </ul>
                    </div>

                    <div className="f-starSingle f-doubleStyle">
                        {
                            this.state.starSingle.bigImg.map((item,idx)=>{
                                return <div className="f-big" key={idx} onClick={this.toList.bind(this)}><img src={item.img_url} /></div>
                            })
                        }
                        <ul className="products">
                            {this.state.starSingle.productData.map((item,idx)=>{
                                return  <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                            <img src={item.img_url}/>
                                            <div className="f-info">
                                                <p className="name">{item.product_name}</p>
                                                <p className="brief">{item.product_brief}</p>
                                                <p className="price">￥{item.product_price}</p>
                                            </div>
                                        </li>
                            })}
                        </ul>
                    </div>

                    <div className="f-newProduct f-doubleStyle">
                        {
                            this.state.newProduct.bigImg.map((item,idx)=>{
                                return  <div className="f-big" key={idx} onClick={this.toList.bind(this)}>
                                            <img src={item.img_url } style={item.img_url ? {display:'block'}:{display:'none'}}/>
                                        </div>
                            })
                        }
                        <ul className="products">
                            {this.state.newProduct.productData.map((item,idx)=>{
                                return  <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                            <img src={item.img_url}/>
                                            <div className="f-info">
                                                <p className="name">{item.product_name}</p>
                                                <p className="brief">{item.product_brief}</p>
                                                <p className="price">￥{item.product_price}</p>
                                            </div>
                                        </li>
                            })}
                        </ul>
                        <div className="f-more">更多新品 > </div>
                    </div>

                    <div className="f-miIntelligence f-doubleStyle">
                        {
                            this.state.miIntelligence.bigImg.map((item,idx)=>{
                                return  <div className="f-big" key={idx} onClick={this.toList.bind(this)}>
                                            <img src={item.img_url } style={item.img_url ? {display:'block'}:{display:'none'}}/>
                                        </div>
                            })
                        }
                        <ul className="f-product">
                            <li onClick={this.toDetails.bind(this,isEmty > 0?this.state.miIntelligence.productData[0].product_id : '')}>
                                <div className="f-img">
                                    <img src={isEmty>0?this.state.miIntelligence.productData[0].img_url : ''}/>
                                </div>
                                <div className="f-info">
                                    <p className="name">
                                        {isEmty>0?this.state.miIntelligence.productData[0].product_name : ''}
                                    </p>
                                    <p className="brief">
                                        {isEmty>0?this.state.miIntelligence.productData[0].product_brief : ''}
                                    </p>
                                    <p className="price">
                                        ￥{isEmty>0?this.state.miIntelligence.productData[0].product_price : ''}
                                    </p>
                                </div>
                            </li>
                            <li onClick={this.toDetails.bind(this,isEmty > 0?this.state.miIntelligence.productData[1].product_id : '')}>
                                <div className="f-info">
                                    <p className="name">
                                        {isEmty>0?this.state.miIntelligence.productData[1].product_name : ''}
                                    </p>
                                    <p className="brief">
                                        {isEmty>0?this.state.miIntelligence.productData[1].product_brief : ''}
                                    </p>
                                    <p className="price">
                                        ￥{isEmty>0?this.state.miIntelligence.productData[1].product_price : ''}
                                    </p>
                                </div>
                                <div className="f-img">
                                    <img src={isEmty>0?this.state.miIntelligence.productData[1].img_url : ''}/>
                                </div>
                            </li>
                            <li onClick={this.toDetails.bind(this,isEmty > 0?this.state.miIntelligence.productData[2].product_id : '')}>
                                <div className="f-img">
                                    <img src={isEmty>0?this.state.miIntelligence.productData[2].img_url : ''}/>
                                </div>
                                <div className="f-info">
                                    <p className="name">
                                        {isEmty>0?this.state.miIntelligence.productData[2].product_name : ''}
                                    </p>
                                    <p className="brief">
                                        {isEmty>0?this.state.miIntelligence.productData[2].product_brief : ''}
                                    </p>
                                    <p className="price">
                                        ￥{isEmty>0?this.state.miIntelligence.productData[2].product_price : ''}
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="f-more">更多米家智能家居 > </div>
                    </div>

                    <div className="f-miTelevision f-doubleStyle">
                        {
                            this.state.miTelevision.bigImg.map((item,idx)=>{
                                return  <div className="f-big" key={idx} onClick={this.toList.bind(this)}>
                                            <img src={item.img_url } style={item.img_url ? {display:'block'}:{display:'none'}}/>
                                        </div>
                            })
                        }
                        <ul className="products">
                            {this.state.miTelevision.productData.map((item,idx)=>{
                                return  <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                            <img src={item.img_url}/>
                                            <div className="f-info">
                                                <p className="name">{item.product_name}</p>
                                                <p className="brief">{item.product_brief}</p>
                                                <p className="price">￥{item.product_price}</p>
                                            </div>
                                        </li>
                            })}
                        </ul>
                        <div className="f-more">更多小米电视产品 > </div>
                    </div>

                    <ul className="f-miProduct">
                        {
                            this.state.miProduct.map((item,idx)=>{
                                return <li key={idx} onClick={this.toList.bind(this)}>
                                    <img src={item.img_url} />
                                </li>
                            })
                        }
                    </ul>

                </div>
                <Footer />
            </div>
        )
    }
}


