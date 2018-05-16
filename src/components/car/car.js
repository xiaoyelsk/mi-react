import './car.scss'
import React from 'react'
import $ from 'jquery'

import Footer from '../footer/footer.js'
import {Link}from'react-router'

export default class car extends React.Component{
    componentDidMount(){
        $('.car').addClass('ative').siblings('a').removeClass('ative')
    }

     states = {
        productData:[
            {
                img_url:"//i8.mifile.cn/v1/a1/ba867a66-0670-f246-5b63-1b05bf9d4d66.webp",
                product_brief:"聚热快，受热匀，适用多种炉具",
                product_id:"7530",
                product_name:"知吾煮汤锅 米家定制",
                product_org_price:"99",
                product_price:"99",
                type:'xinpin',
                qty:1,
            
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
                qty:1,
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
                qty:1,
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
                qty:1,
                type_text:'新品'
            }
           
        ]
    }

// increment(){
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

 constructor(...args){
        super(...args);
        var that = this;

   this.state={
        count:1,
        total:0
         
    };
    this.change = (e) =>{
        this.setState({count:e.target.value});
        // if(this.state.count>1){}
    }
        this.toMinus=()=>{
            if(this.state.count>1){
                this.setState({
                    count:this.state.count-1
                });
            }
                
        }

      this.toAdd=()=>{
        this.setState({
       
            count: this.state.count + 1
        });


    }




 // this.subTotal =()=>{

 //    total+=productData.qty*productData. product_price;

   
 // }
        

 }
    render(){
        return (
            <div>
                <div className="big">
                    <div className="tou">
                        <ul>
                            <Link to="/goods" ><li className="fa fa-chevron-left"></li></Link>
                             <li>购物车</li>
                            <li className="fa fa-search"></li>
                        </ul>

                    </div>
                    <div className="dl">
                        <h2>登录后享受更多优惠</h2>
                        <span><Link to="/login" >去登录</Link></span>

                    </div>
                    <div className="gouwu">
                        <ul className="gwc">
                            {
                                this.states.productData.map((item,idx)=>{
                                    return (
                                        <li data-guid={item.product_id}>
                                            <div className="p-img">
                                                <img src={item.img_url}/>
                                            </div>
                                            <div className="big">
                                            <div className="p-info">
                                                <h4>{item.product_name}</h4>
                                              
                                                <span>售价：{item.product_price}元</span>
                                            </div>
                                            <div className="num">
                                                <div className="qty">
                                                    <button class="minus" onClick={this.toMinus.bind(this)}>-</button>
                                                <input  type="text" value={this.state.count}   onChange={this.change.bind(this)}/>
                                                     <button class="add" onClick={this.toAdd.bind(this)}>+</button> 
                                                </div>
                                                    <span className="fa fa-trash-o del"></span> 
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="tuijian">
                        <p>猜你喜欢</p>
                        <ul className="product">
                            {
                                this.states.productData.map((item,idx)=>{
                                    return (
                                        <li>
                                            <div className="product-img">
                                                <img src={item.img_url}/>
                                            </div>
                                            <div className="product-info">
                                                <h4>{item.product_name}</h4>
                                               
                                                <span>￥{item.product_price}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <ul className="foot">        
                        <li className="subTotal" data-column="SubTotal">共计
                        </li>
                        <li><Link to="/classify"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>继续购物</span></Link></li>
                        <li><Link to="/resigter">去结算</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
//key={idx} onClick={this.toDetails.bind(this,item.product_id)}
//key={idx} onClick={this.toDetails.bind(this,item.product_id)}
//<span className="nums">5</span>