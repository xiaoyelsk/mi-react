import './car.scss'
import React from 'react'
import $ from 'jquery'

import Footer from '../footer/footer.js'
import {Link}from'react-router'
import http from '../../utils/httpclient.js'
export default class car extends React.Component{
     state={
        datas:[],
        dateset:[],
        total:0,
          count:1
    }

    componentDidMount(){
        $('.car').addClass('ative').siblings('a').removeClass('ative')

         let id = this.props.params.p_id;
            console.log(id)
            http.post('getProductCar',{username:"admin"}).then((res)=>{
                console.log (res)
                this.setState({
                    datas:res.data,
                })
                    let dataList = res.data;
                    let prl = [];
                for(var i=0;i<dataList.length;i++){
                    prl.push(dataList[i]);
                }
                    this.datas=prl;
                    console.log(this.datas)

                    //触发add按钮
                $(".add").click(function(){  
                   
                    var num = $(this).parent().children("span");
                    console.log(num)
                    //点击时数量添加
                    num.text(parseInt(num.text())+1);
                    //商品总数数量
                    var totalNum = parseInt($(".totalNum").text());
                    totalNum++
                    $(".totalNum").text(totalNum);

                    //计算 总价
                    // var goods_price =parseInt($("#goods_price").text());
                    var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());
        
                    console.log(goods_price)
                    $(".totalPrice").text(parseInt($(".totalPrice").text())+goods_price);
                })
                //触发减按钮
                $(".minus").click(function(){
                    //商品数量减减
                    var num = $(this).parent().children("span");
                    if(parseInt(num.text())){
                        num.text(parseInt(num.text())-1);
                        //商品数量总数
                        var totalNum = parseInt($(".totalNum").text());
                        totalNum--
                        $(".totalNum").text(totalNum);

                        //计算总数
                        // var goods_price = parseInt($("#goods_price").text());
                      var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());

                        $(".totalPrice").text(parseInt($(".totalPrice").text())-goods_price);
                    } else{
                         num.text("0");
                    }
                });

                //删除
              
                // $(".lis").on('click',".del",function(){
                   
                //     $(this).parent().parent().remove();
                //      console.log(this)
                // })
                
    });

        http.post('getproduct').then((res)=>{
             this.setState({
                    dateset:res.data
                })
            let datal = res.data;
            let pro = [];
                for(var i=0;i<datal.length;i++){
                    if(datal[i].type_text == "电视"){
                        pro.push(datal[i]);
                    }
                }
                this.dateset=pro;
          })
    }
          
    render(){
        return (
            <div>
                <div className="big">
                    <div className="tou">
                        <ul>
                            <Link to="/goods" ><li className="fa fa-paper-plane-o"></li></Link>
                             <li>购物车</li>
                            <li className="fa fa-search"></li>
                        </ul>
                    </div>
                    <div className="dl">
                        <h2>登录后享受更多优惠</h2>
                        <span><Link to="/login" >去登录</Link></span>
                    </div>
                    <div className="gouwu">
                        <div className="quanxuan">
                        <input type="checkbox" className="alls"/>
                        <span>全选</span>
                        </div>
                        <ul className="gwc">
                                 {
                            this.state.datas.map((item,idx)=>{
                                return (
                                    <li key={idx} className="lis">
                                        <input type="checkbox"className="all" />
                                        <div className="p-img">
                                            <img src={item.img}/>
                                        </div>
                                              <h4>{item.p_name}</h4>
                                        <div className="bigs">
                                          售价:<i className="goods_price">{item.p_price}</i>元 <br/>                      
                                        <div className="qty">
                                            <b className="fa fa-minus-square minus"></b>
                                            <span>{item.qty}</span>
                                            <b className="fa fa-plus-square add"></b>   
                                        </div>
                                            <span className="fa fa-trash-o del"  onClick={this.shanchu}></span> 
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
                            this.state.dateset.map((item,idx)=>{
                                return (
                                    <li key={idx}>
                                        <div className="tp">
                                            <img src={item.img_url}/>
                                        </div>
                                        <div className="info">
                                            <h4>{item.type}</h4>
                                         
                                            <span>￥{item.product_id}元</span>
                                        </div>
                                    </li>
                                )
                            })
                        }

                        </ul>
                    </div>
                    <ul className="foot">  
                      <li className="total" >共计：<span className="totalNum">0</span>件          
                    <p>总价￥<span className="totalPrice">0</span>元</p>
                    </li>
                        <li><Link to="/classify">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>继续购物</span></Link></li>
                        <li><Link to="/resigter">去结算</Link></li>
             
                    </ul>
                </div>
            </div>
        )
    }












}
//key={idx} onClick={this.toDetails.bind(this,item.product_id)}
//key={idx} onClick={this.toDetails.bind(this,item.product_id)}
//<span className="nums">5</span>    // <input  type="text" value="1" />
//  // <li className="total" >共计：<span className="totalNum">0</span>件