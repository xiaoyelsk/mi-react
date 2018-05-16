import './classify.scss'
import React from 'react'
import Footer from '../footer/footer.js'
import $ from 'jquery'
import http from '../../utils/httpclient.js'


export default class Classify extends React.Component{
    // 返回到首页
    backIndex(){
        this.props.router.push('/')
    }
    // 切换产品
    navBar(event){
        let idx = event.target.getAttribute("data-idx");
        if(idx){
            // 找到锚点元素
            let ele = document.getElementById(idx);

            // 跳转到锚点
            if(ele){
                ele.scrollIntoView({
                    behavior:'smooth',
                    block:'start'
                });

            }
        }
    }

    // 跳转到列表
    toList(type_text){
        this.props.router.push('/list/'+type_text);
    } 
    // 跳到搜索组件
    toSearch(){
        this.props.router.push('/search');
    }
    
    // 数据
    state = {
        productData:[]
    }
    
    componentDidMount(){
        $('.classify').addClass('ative').siblings('a').removeClass('ative')

        // 切换菜单样式
        let $currLi = $('#f-navTitle');
        $currLi.on('click','li',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
        })

        // 获取后台数据
        http.post('getProduct',{}).then(res=>{
            if(res.status){
                let data = res.data;
                // 总数量
                let totallData = [];
                // 新品
                let xinpin = [];
                // 手机
                let shouji = [];
                // 电视
                let dianshi = [];
                // 家电
                let jiadian = [];
                // 路由
                let luyou = [];
                // 智能
                let zhineng = [];
                for(var i =0;i<data.length;i++){
                    let type_text = data[i].type_text;
                    if(type_text == '新品'){
                        xinpin.push(data[i]);
                    }else if(type_text == '手机'){
                        shouji.push(data[i]);
                    }else if(type_text == '电视'){
                        dianshi.push(data[i])
                    }else if(type_text == '家电'){
                        jiadian.push(data[i])
                    }else if(type_text == '路由'){
                        luyou.push(data[i]);
                    }else if(type_text == '智能'){
                        zhineng.push(data[i]);
                    }
                }
                this.setState({
                    productData:[
                        {_0:xinpin},
                        {_1:shouji},
                        {_2:dianshi},
                        {_3:jiadian},
                        {_4:luyou},
                        {_5:zhineng}
                    ]
                })
            }
        })
    }
    render(){
        return (
            <div className="f-classify">
                <ul className="f-header animate-route">
                    <li onClick={this.backIndex.bind(this)}> <i className="fa fa-angle-left" aria-hidden="true"></i> </li>
                    <li><span>分类</span></li>
                    <li onClick={this.toSearch.bind(this)}><i className="fa fa-search"></i></li>
                </ul>
                <div className="f-main animate-route">
                    <div className="f-navBar">
                        <ul className="f-navTitle" id="f-navTitle">
                            
                            {
                                this.state.productData.map((item,idx)=>{
                                    return (
                                        <li className= {idx == 0 ? "active" : ''} key={idx}>
                                            <a data-idx={idx} onClick={this.navBar.bind(this)} >
                                                {item['_'+idx][0] ? item['_'+idx][0].type_text : ''}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="f-wrap">
                        {
                            this.state.productData.map((obj,idx)=>{
                                return (
                                    <ul className="f-item" id={idx} key={idx}>
                                        {
                                           obj['_'+idx].map((item,idx)=>{
                                                return (
                                                    <li key={idx} onClick={this.toList.bind(this,item.type_text)}>
                                                        <img src={item.img_url } style={item.img_url && idx==1?{display:'none'} :{display:'block'}} />
                                                        <span style={item.product_name ?{display:'block'} :{display:'none'}}>
                                                            {item.product_name ? item.product_name.slice(0,8) : ''}
                                                        </span>
                                                       
                                                    </li>
                                                )     
                                           })
                                        }
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}