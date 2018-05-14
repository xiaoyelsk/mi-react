import './classify.scss'
import React from 'react'
import Footer from '../footer/footer.js'
import $ from 'jquery'


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
    
    // 数据
    state = {
        productData:[
            {
                _0: [
                    {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/812ee56bcd3ff8954f7a9672a5f9ca13.jpg?thumb=1&w=720&h=280',
                    type:'recommend',
                    type_text:'新品'
                    },
                    {
                        img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2168eec5ae8ffc145a646d940c4cc6ca.jpg?thumb=1&w=720&h=440',
                        product_name:'新品',
                        type:'recommend',
                        type_text:'新品'
                    },
                    {
                    img_url:"//i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70.webp",
                    product_brief:"'6.44'大屏5300mAh大电量",
                    product_id:"10000057",
                    product_name:"小米Max 2 大屏大电量",
                    product_org_price:"1399.00",
                    product_price:"1299.00",
                    type:'recommend',
                    type_text:'新品'
                    },
                    {
                        img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg",
                        product_brief:"'5.99'大屏，4轴光学防抖",
                        product_id:"10000070",
                        product_name:"小米MIX 2",
                        product_org_price:"3299.00",
                        product_price:"2899",
                        type:'recommend',
                        type_text:'新品'
                    },
                    {
                        img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb34c2bb89ecd66885e2ac15e6278d71.jpg",
                        product_brief:"1.4μm大像素 AI 双摄",
                        product_id:"7765",
                        product_name:"红米Note 5 6GB+64GB",
                        product_org_price:"1699.00",
                        product_price:"1699.00",
                        type:'recommend',
                        type_text:'新品'
                    },
                    {
                        img_url:"//i8.mifile.cn/v1/a1/f7efa66b-555f-8900-0649-7c2acc99fc80.webp",
                        product_brief:"全面屏，前置柔光自拍",
                        product_id:"7359",
                        product_name:"红米5 Plus 64GB",
                        product_org_price:"1299.00",
                        product_price:"1299.00",
                        type:'recommend',
                        type_text:'新品'
                    }
                ]
            },
            {
                _1: [
                     {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/584bd444fbb7bde464107eb4dbe2e17a.jpg?thumb=1&w=720&h=280',
                    type:'dailySelection',
                    type_text:'手机'
                    },
                    {
                        img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96abe9626d847980b66ae33ba2fb7908.jpg?thumb=1&w=720&h=440',
                        product_name:'手机',
                        type:'dailySelection',
                        type_text:'手机'
                    },
                    {
                    img_url:"//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp",
                    product_brief:"轻巧长续航",
                    product_id:"7758",
                    product_name:"红米5A 32GB",
                    product_org_price:"699.00",
                    product_price:"699.00",
                    type:'dailySelection',
                    type_text:'手机'
                    },
                    {
                        img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e8104120fc746ecae87626da4ff25da.jpg",
                        product_brief:"轻巧长续航",
                        product_id:"7758",
                        product_name:"红米5A 32GB",
                        product_org_price:"699.00",
                        product_price:"699.00",
                        type:'dailySelection',
                        type_text:'手机'
                    },
                    {
                        img_url:"//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp",
                        product_brief:"轻巧长续航",
                        product_id:"7758",
                        product_name:"红米5A 32GB",
                        product_org_price:"699.00",
                        product_price:"699.00",
                        type:'dailySelection',
                        type_text:'手机'
                    },
                    {
                        img_url:"//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp",
                        product_brief:"轻巧长续航",
                        product_id:"7758",
                        product_name:"红米5A 32GB",
                        product_org_price:"699.00",
                        product_price:"699.00",
                        type:'dailySelection',
                        type_text:'手机'
                    }
                ]
            }
        ]
       
    }
    
    componentDidMount(){
        $('.classify').addClass('ative').siblings('a').removeClass('ative')

        // 切换菜单样式
        let $currLi = $('#f-navTitle');
        $currLi.on('click','li',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
        })
    }
    render(){
        return (
            <div className="f-classify">
                <ul className="f-header">
                    <li onClick={this.backIndex.bind(this)}> <i className="fa fa-angle-left" aria-hidden="true"></i> </li>
                    <li><span>分类</span></li>
                    <li><i className="fa fa-search"></i></li>
                </ul>
                <div className="f-main">
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