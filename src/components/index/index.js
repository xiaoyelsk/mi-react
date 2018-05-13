import React from 'react'

import Footer from '../footer/footer.js'
import './index.scss'

// 引入swiper模块、css
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'

export default class Index extends React.Component{
    state = {
        // 轮播图数据
        bannerImg:[
            {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?bg=FFFFFF'},
            {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/92e3eacec734cb422f602df91b66c1da.jpg?bg=FFFFFF'},
            {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1e76cdf0ac3a01fff59eca92a28ac568.jpg?bg=FFFFFF'}
        ],
        // 导航栏数据
        navImg:[
            {img_url:'//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29.webp?bg=F1F7E4'},
            {img_url:'//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac.webp?bg=FCF8EB'},
            {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?bg=FFFFFF'},
            {img_url:'//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69.webp?bg=EBF6FC'},
            {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152'}
        ],
        // 通道数据 
        channel:[
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e05bf36fa50a26264e0307f74351e27.jpg?bg=FFFFFF',
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/04e0136baa0b83859e6cc2e997a9a8eb.jpg?bg=FFFFFF',
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/22fb1734aa79d4ae26e92f63bf14ada3.jpg?bg=FFFFFF'
        ],
        // 每日精选
        dailySelection:{
            bigImg:[
                {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/584bd444fbb7bde464107eb4dbe2e17a.jpg?thumb=1&w=720&h=280'},
                {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96abe9626d847980b66ae33ba2fb7908.jpg?thumb=1&w=720&h=440'}
            ],
            productData:[
                {
                    img_url:"//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp",
                    product_brief:"轻巧长续航",
                    product_id:"7758",
                    product_name:"红米5A 32GB",
                    product_org_price:"699.00",
                    product_price:"699.00"
                },
                {
                    img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e8104120fc746ecae87626da4ff25da.jpg",
                    product_brief:"轻巧长续航",
                    product_id:"7758",
                    product_name:"红米5A 32GB",
                    product_org_price:"699.00",
                    product_price:"699.00"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp",
                    product_brief:"轻巧长续航",
                    product_id:"7758",
                    product_name:"红米5A 32GB",
                    product_org_price:"699.00",
                    product_price:"699.00"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp",
                    product_brief:"轻巧长续航",
                    product_id:"7758",
                    product_name:"红米5A 32GB",
                    product_org_price:"699.00",
                    product_price:"699.00"
                }

            ]
        },
        // 超值推荐
        recommend:{
            bigImg:[
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/812ee56bcd3ff8954f7a9672a5f9ca13.jpg?thumb=1&w=720&h=280'
                },
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2168eec5ae8ffc145a646d940c4cc6ca.jpg?thumb=1&w=720&h=440'
                }
            ],
            productData:[
                {
                    img_url:"//i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70.webp",
                    product_brief:"'6.44'大屏5300mAh大电量",
                    product_id:"10000057",
                    product_name:"小米Max 2 大屏大电量",
                    product_org_price:"1399.00",
                    product_price:"1299.00"
                },
                {
                    img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg",
                    product_brief:"'5.99'大屏，4轴光学防抖",
                    product_id:"10000070",
                    product_name:"小米MIX 2",
                    product_org_price:"3299.00",
                    product_price:"2899"
                },
                {
                    img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb34c2bb89ecd66885e2ac15e6278d71.jpg",
                    product_brief:"1.4μm大像素 AI 双摄",
                    product_id:"7765",
                    product_name:"红米Note 5 6GB+64GB",
                    product_org_price:"1699.00",
                    product_price:"1699.00"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/f7efa66b-555f-8900-0649-7c2acc99fc80.webp",
                    product_brief:"全面屏，前置柔光自拍",
                    product_id:"7359",
                    product_name:"红米5 Plus 64GB",
                    product_org_price:"1299.00",
                    product_price:"1299.00"
                }

            ]
        },
        // 明星单品
        starSingle:{
            bigImg:[
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/caa2f612a1489671ca69b2f704222c49.jpg?thumb=1&w=720&h=280',},
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/69b5e277ba4828fc41faf8d1b0d92974.jpg?thumb=1&w=720&h=440'
                }
            ],
            productData:[
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba8a0314-ec20-aa9d-2f0b-cd1e75caabfb.webp",
                    product_brief:"探索触手可及的新视角",
                    product_id:"5184",
                    product_name:"小米无人机4K版",
                    product_org_price:"2999",
                    product_price:"2999"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba8a0314-ec20-aa9d-2f0b-cd1e75caabfb.webp",
                    product_brief:"探索触手可及的新视角",
                    product_id:"5184",
                    product_name:"小米无人机4K版",
                    product_org_price:"2999",
                    product_price:"2999"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba8a0314-ec20-aa9d-2f0b-cd1e75caabfb.webp",
                    product_brief:"探索触手可及的新视角",
                    product_id:"5184",
                    product_name:"小米无人机4K版",
                    product_org_price:"2999",
                    product_price:"2999"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba8a0314-ec20-aa9d-2f0b-cd1e75caabfb.webp",
                    product_brief:"探索触手可及的新视角",
                    product_id:"5184",
                    product_name:"小米无人机4K版",
                    product_org_price:"2999",
                    product_price:"2999"
                }

            ]
        },
        // 新品
        newProduct:{
            bigImg:[
                {img_url:''},
                {img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8527fd7c431e64434285a2f5a68cb78a.jpg?thumb=1&w=720&h=440'}
            ],
            productData:[
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                    product_brief:"聚热快，受热匀，适用多种炉具",
                    product_id:"7530",
                    product_name:"知吾煮汤锅 米家定制",
                    product_org_price:"99",
                    product_price:"99"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                    product_brief:"聚热快，受热匀，适用多种炉具",
                    product_id:"7530",
                    product_name:"知吾煮汤锅 米家定制",
                    product_org_price:"99",
                    product_price:"99"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                    product_brief:"聚热快，受热匀，适用多种炉具",
                    product_id:"7530",
                    product_name:"知吾煮汤锅 米家定制",
                    product_org_price:"99",
                    product_price:"99"
                },
                {
                    img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                    product_brief:"聚热快，受热匀，适用多种炉具",
                    product_id:"7530",
                    product_name:"知吾煮汤锅 米家定制",
                    product_org_price:"99",
                    product_price:"99"
                }
            ]
        },
        miIntelligence:{
            bigImg:[
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d70394e6de792c1cfba76d4d7dc38f7e.jpg?thumb=1&w=720&h=280'
                },
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a236a6942d9b4dade1e321154c526a0f.jpg?thumb=1&w=720&h=440'
                }
            ],
            productData:[
                {
                    img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/65eeeedca463345b0cfd36e042185af3.jpg",
                    product_brief:"智慧光精灵，光明随时随地",
                    product_id:"6105",
                    product_name:"米家感应夜灯",
                    product_org_price:"49",
                    product_price:"45"
                }
            ]
        },
        miTelevision:{
            bigImg:[
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/783941bc5daea7d0b233fa9b1fa7780c.jpg?thumb=1&w=720&h=280'
                },
                {
                    img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/61c262b21d800b8fb09ef325f2aea7d9.jpg?thumb=1&w=720&h=440'
                }
            ],
            productData:[
                {
                    img_url:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    img_url_color:"#B0AD9E",
                    img_url_webp:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    product_brief:"64位处理器，高清智能电视",
                    product_id:"6222",
                    product_name:"小米电视4A 32英寸",
                    product_org_price:"999.00",
                    product_price:"899.00"
                },
                 {
                    img_url:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    img_url_color:"#B0AD9E",
                    img_url_webp:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    product_brief:"64位处理器，高清智能电视",
                    product_id:"6222",
                    product_name:"小米电视4A 32英寸",
                    product_org_price:"999.00",
                    product_price:"899.00"
                },
                 {
                    img_url:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    img_url_color:"#B0AD9E",
                    img_url_webp:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    product_brief:"64位处理器，高清智能电视",
                    product_id:"6222",
                    product_name:"小米电视4A 32英寸",
                    product_org_price:"999.00",
                    product_price:"899.00"
                },
                 {
                    img_url:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    img_url_color:"#B0AD9E",
                    img_url_webp:"//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp",
                    product_brief:"64位处理器，高清智能电视",
                    product_id:"6222",
                    product_name:"小米电视4A 32英寸",
                    product_org_price:"999.00",
                    product_price:"899.00"
                }
            ]
        },
        miProduct:[
            {
                img_url:'//i8.mifile.cn/v1/a1/f938ae9f-e54a-1fa1-a52d-62dfe534b579.webp?bg=E8D6BB'
            },
             {
                img_url:'//i8.mifile.cn/v1/a1/f938ae9f-e54a-1fa1-a52d-62dfe534b579.webp?bg=E8D6BB'
            },
             {
                img_url:'//i8.mifile.cn/v1/a1/f938ae9f-e54a-1fa1-a52d-62dfe534b579.webp?bg=E8D6BB'
            },
             {
                img_url:'//i8.mifile.cn/v1/a1/f938ae9f-e54a-1fa1-a52d-62dfe534b579.webp?bg=E8D6BB'
            },
            {
                img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/001824c5de14e5456cce94d78e0b92f6.jpg?thumb=1&w=720&h=280'
            }

        ]
    }
    componentDidMount(){
        // 轮播图
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
        })
    }
    render(){
        return (
            <div id="index">
                <ul className="header">
                    <li><img src='src/components/img/logo.png'/></li>
                    <li>
                        <i className="fa fa-search fdj" aria-hidden="true"></i>
                        <input type="text" className="f-search" placeholder="搜索商品" />
                    </li>
                    <li><i className="fa fa-user-o" aria-hidden="true"></i></li>
                </ul>
                <div className="main">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.bannerImg.map((item,idx)=>{
                                    return  <div className="swiper-slide" key={idx}>
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
                                return <li key={idx}><img src={item.img_url}/></li>
                            })
                        }
                    </ul>

                    <div className="f-channel">
                        <div className="channel-l channel-box">
                            <img src={this.state.channel[0]}/>
                        </div>
                        <ul className="channel-r channel-box">
                            <li><img src={this.state.channel[1]} /></li>
                            <li><img src={this.state.channel[2]} /></li>
                        </ul>
                    </div>

                    <div className="f-dailySelection f-doubleStyle">
                        {
                            this.state.dailySelection.bigImg.map((item,idx)=>{
                                return <div className="f-big" key={idx}><img src={item.img_url} /></div>
                            })
                        }
                        <ul className="products">
                            {this.state.dailySelection.productData.map((item,idx)=>{
                                return  <li key={idx}>
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
                                return <div className="f-big" key={idx}><img src={item.img_url} /></div>
                            })
                        }
                        <ul className="products">
                            {this.state.recommend.productData.map((item,idx)=>{
                                return  <li key={idx}>
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
                                return <div className="f-big" key={idx}><img src={item.img_url} /></div>
                            })
                        }
                        <ul className="products">
                            {this.state.starSingle.productData.map((item,idx)=>{
                                return  <li key={idx}>
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
                                return  <div className="f-big" key={idx}>
                                            <img src={item.img_url } style={item.img_url ? {display:'block'}:{display:'none'}}/>
                                        </div>
                            })
                        }
                        <ul className="products">
                            {this.state.newProduct.productData.map((item,idx)=>{
                                return  <li key={idx}>
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
                                return  <div className="f-big" key={idx}>
                                            <img src={item.img_url } style={item.img_url ? {display:'block'}:{display:'none'}}/>
                                        </div>
                            })
                        }
                        <ul className="f-product">
                            <li>
                                <div className="f-img">
                                    <img src={this.state.miIntelligence.productData[0].img_url}/>
                                </div>
                                <div className="f-info">
                                    <p className="name">{this.state.miIntelligence.productData[0].product_name}</p>
                                    <p className="brief">{this.state.miIntelligence.productData[0].product_brief}</p>
                                    <p className="price">￥{this.state.miIntelligence.productData[0].product_price}</p>
                                </div>
                            </li>
                            <li>
                                <div className="f-info">
                                    <p className="name">{this.state.miIntelligence.productData[0].product_name}</p>
                                    <p className="brief">{this.state.miIntelligence.productData[0].product_brief}</p>
                                    <p className="price">￥{this.state.miIntelligence.productData[0].product_price}</p>
                                </div>
                                <div className="f-img">
                                    <img src={this.state.miIntelligence.productData[0].img_url}/>
                                </div>
                            </li>
                            <li>
                                <div className="f-img">
                                    <img src={this.state.miIntelligence.productData[0].img_url}/>
                                </div>
                                <div className="f-info">
                                    <p className="name">{this.state.miIntelligence.productData[0].product_name}</p>
                                    <p className="brief">{this.state.miIntelligence.productData[0].product_brief}</p>
                                    <p className="price">￥{this.state.miIntelligence.productData[0].product_price}</p>
                                </div>
                            </li>
                        </ul>
                        <div className="f-more">更多米家智能家居 > </div>
                    </div>

                    <div className="f-miTelevision f-doubleStyle">
                        {
                            this.state.miTelevision.bigImg.map((item,idx)=>{
                                return  <div className="f-big" key={idx}>
                                            <img src={item.img_url } style={item.img_url ? {display:'block'}:{display:'none'}}/>
                                        </div>
                            })
                        }
                        <ul className="products">
                            {this.state.miTelevision.productData.map((item,idx)=>{
                                return  <li key={idx}>
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
                                return <li key={idx}>
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


