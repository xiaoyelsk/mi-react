// 商品列表组件
import './list.scss'
import React from 'react'

import Footer from '../footer/footer.js'

import $ from 'jquery'
import http from '../../utils/httpclient.js'
export default class List extends React.Component{
    // 回到分类
    backClassify(){
        this.props.router.push('/classify')
    }
    // 跳到详情页:将商品id传给详情页
    toDetails(product_id){
        this.props.router.push('/goods/'+product_id);
    }
    // 跳到搜索组件
    toSearch(){
        this.props.router.push('/search');
    }
    state = {
        productData:[],
        loveData:[],
        title:'分类'
    }
    componentDidMount(){
        // 获取列表传过来的参数
        let product_type = this.props.params.type;
        let numType = this.props.params.num;
        if(numType && numType == 'search'){
            http.post('searchProduct',{keyword:product_type}).then(res=>{
                // 判断返回结果是否为true
                if(res.status){
                    this.setState({
                        productData:res.data,
                        title:product_type
                    })
                }else{
                    this.setState({
                        title:product_type
                    })
                    // 显示图片
                    this.refs.emtyTips.style.display = 'block';
                }
            })
        }else{
            http.post('getProduct',{}).then(res=>{
                let data = res.data;
                // 列表数据
                let productData = [];
                let proTemp = [];
                // 猜你喜欢数据：新品
                let loveData = [];
                let loveTemp = [];

                // 电视
                let aData = [];
                let aTemp = [];
                // 智能
                let bData = [];
                let bTemp = [];
                // 路由
                let cData = [];
                let cTemp = [];
                if(res.status){
                    let data = res.data;
                    for(var i=0;i<data.length;i++){
                        let type_text = data[i].type_text;
                        if(type_text == product_type){
                            proTemp.push(data[i]);
                        }else if(type_text == '新品'){
                            loveTemp.push(data[i]);
                        }else if(type_text == '电视'){
                            aTemp.push(data[i]);
                        }else if(type_text == '智能'){
                            bTemp.push(data[i]);
                        }else if(type_text == '路由'){
                            cTemp.push(data[i]);
                        }
                    }
                    // 封一个进行二次数据抽取函数
                    function getData(temp,data){
                        for(var i =0;i<temp.length;i++){
                            if(i < 2){
                                continue;
                            }else{
                                data.push(temp[i])
                            }
                        }
                    }
                    getData(proTemp,productData);
                    getData(loveTemp,loveData);
                    getData(aTemp,aData);
                    getData(bTemp,bData);
                    getData(cTemp,cData);

                    // 判断是否有传参过来
                    if(product_type == undefined){
                        $('.main-product').hide();
                        // 随机显示猜你喜欢板块
                        this.setState({
                            loveData:loveData.concat(aData,bData,cData)
                        })
                        return;
                    }else{
                        this.setState({
                            productData,
                            loveData:loveData.concat(aData,bData,cData)
                        })
                    }
                }
            })
        }
        
    }

    render(){
        let loveImg = '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg';
        return (
            <div className="f-list">

                <ul className="list-header animate-route">
                    <li onClick={this.backClassify.bind(this)}> <i className="fa fa-angle-left" aria-hidden="true"></i> </li>
                    <li><span>{this.state.title}</span></li>
                    <li onClick={this.toSearch.bind(this)}><i className="fa fa-search"></i></li>
                </ul>

                <div className="list-main animate-route">

                    <ul className="main-product">
                        {
                            this.state.productData.map((item,idx)=>{
                                return (
                                    <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                        <div className="product-img">
                                            <img src={item.img_url}/>
                                        </div>
                                        <div className="product-info">
                                            <p>{item.product_name}</p>
                                            <p>{item.product_brief}</p>
                                            <p>￥{item.product_price}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <ul className="main-love">
                        {
                            this.state.loveData.map((item,idx)=>{
                                return (
                                    <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                        <img src={idx == 0 ? loveImg:item.img_url}/>
                                        <div className="love-info" style={idx == 0 ? {display:'none'}:{display:'block'}}>
                                            <p className="name" style={item.product_name ? {display:'block' } : {display:'none'}}>
                                                {item.product_name}
                                            </p>
                                            <p className="brief" style={item.product_brief ? {display:'block' } : {display:'none'}}>
                                                {item.product_brief}
                                            </p>
                                            <p className="price" style={item.product_price ? {display:'block' } : {display:'none'}}>
                                                ￥{item.product_price}
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="emtyTips" ref="emtyTips">
                        <div className="tipsImg">
                            <img src='https://s1.mi.com/m/images/m/empty.png' />
                        </div>
                        <p>抱歉，暂时没有与<span>{this.state.title}</span>相关的商品 </p>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}