// 商品列表组件
import './list.scss'
import React from 'react'

import Footer from '../footer/footer.js'

import $ from 'jquery'

export default class List extends React.Component{
    // 回到分类
    backClassify(){
        this.props.router.push('/classify')
    }
    // 跳到详情页:将商品id传给详情页
    toDetails(product_id){
        this.props.router.push('/goods(/:product_id)');
    }

    state = {
        productData:[
            {
                img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                product_brief:"聚热快，受热匀，适用多种炉具",
                product_id:"7530",
                product_name:"知吾煮汤锅 米家定制",
                product_org_price:"99",
                product_price:"99",
                type:'xinpin',
                type_text:'新品'
            },
            {
                img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                product_brief:"聚热快，受热匀，适用多种炉具",
                product_id:"7530",
                product_name:"知吾煮汤锅 米家定制",
                product_org_price:"99",
                product_price:"99",
                type:'xinpin',
                type_text:'新品'
            },
            {
                img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                product_brief:"聚热快，受热匀，适用多种炉具",
                product_id:"7530",
                product_name:"知吾煮汤锅 米家定制",
                product_org_price:"99",
                product_price:"99",
                type:'xinpin',
                type_text:'新品'
            },
            {
                img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                product_brief:"聚热快，受热匀，适用多种炉具",
                product_id:"7530",
                product_name:"知吾煮汤锅 米家定制",
                product_org_price:"99",
                product_price:"99",
                type:'xinpin',
                type_text:'新品'
            }
           
        ],
        loveData:[
            {
                img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg',
                type:'loveProduct',
                type:'猜你喜欢'
            },
            {
                img_url:"//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp",
                product_brief:"轻巧长续航",
                product_id:"7758",
                product_name:"红米5A 32GB",
                product_org_price:"699.00",
                product_price:"699.00",
                type:'loveProduct',
                type:'猜你喜欢'
            },
            {
                img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e8104120fc746ecae87626da4ff25da.jpg",
                product_brief:"轻巧长续航",
                product_id:"7758",
                product_name:"红米5A 32GB",
                product_org_price:"699.00",
                product_price:"699.00",
                type:'loveProduct',
                type:'猜你喜欢'
            },
            {
                img_url:"//i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70.webp",
                product_brief:"'6.44'大屏5300mAh大电量",
                product_id:"10000057",
                product_name:"小米Max 2 大屏大电量",
                product_org_price:"1399.00",
                product_price:"1299.00",
                type:'loveProduct',
                type:'猜你喜欢'
            },
            {
                img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg",
                product_brief:"'5.99'大屏，4轴光学防抖",
                product_id:"10000070",
                product_name:"小米MIX 2",
                product_org_price:"3299.00",
                product_price:"2899",
                type:'loveProduct',
                type:'猜你喜欢'
            }
        ]
    }
    componentDidMount(){
        // 获取列表传过来的参数
        let product_type = this.props.params.type;
        console.log(product_type)
        if(product_type == undefined){
            $('.main-product').hide()
        }
    }

    render(){
        return (
            <div className="f-list">
                <ul className="list-header">
                    <li onClick={this.backClassify.bind(this)}> <i className="fa fa-angle-left" aria-hidden="true"></i> </li>
                    <li><span>分类</span></li>
                    <li><i className="fa fa-search"></i></li>
                </ul>
                <div className="list-main">
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
                                        <img src={item.img_url}/>
                                        <div className="love-info">
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
                </div>
                <Footer />
            </div>
        )
    }
}