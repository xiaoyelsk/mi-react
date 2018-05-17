// 购物车组件
import './car.scss';
import React from 'react';
import {Link} from 'react-router';
import http from '../../utils/httpclient.js';

export default class Car extends React.Component{
    state = {
        // 显示空购物车图片
        showCar:{display:'none'},
        // 用户购物车数据
        userData:[],
        // 保存商品总数量
        totalQty:0,
        // 保存商品总价格
        totalPrice:0
    }
    // 封一个计算商品总价和总数量的函数
    computed(res){
        var totalQty = 0;
        var totalPrice = 0;
        var singleTotalPrice = 0;
        var singleTotalQty = 0;
        // 获取商品总数量
        for(var i=0;i<res.data.length;i++){
            if(res.data[i].isSelected == 'true'){
                singleTotalPrice = Number(res.data[i].p_price)*Number(res.data[i].qty);
                singleTotalQty = Number(res.data[i].qty);
                console.log(singleTotalPrice,singleTotalQty);
                totalQty = totalQty + singleTotalQty;
                totalPrice = totalPrice + singleTotalPrice;
            }
            // totalQty = totalQty + Number(res.data[i].qty);
            // totalPrice = totalPrice + Number(res.data[i].p_price)*Number(res.data[i].qty);
        }
        this.setState({
            userData:res.data,
            totalQty,
            totalPrice
        })
    }
    // 封一个增加/减少商品的函数
    handle(obj,e){
        // 商品数量少于1即默认删除该商品
        if(obj.qty < 1){
            // 调用删除商品的函数
            this.deleteProduct(obj.id);
        }
        // 获取商品id和数量
        let countType = e.target.innerText;console.log(countType)
        // let countType = '+';
        http.post('upProductqty',{username:'admin',id:obj.id,type:countType}).then(res=>{
            if(res){
                http.post('getProductCar',{username:'admin'}).then(res=>{
                    // 调用计算总价格和总数量的函数
                    this.computed(res);
                })
            }
        })
    }
    // 封一个删除商品的函数
    deleteProduct(id){
        http.post('delProduct',{id}).then(res=>{
            console.log(res)
            // 调用计算总价和总数量的函数
            if(res.status){
                http.post('getProductCar',{username:'admin'}).then(res=>{
                    // 调用计算总价格和总数量的函数
                    this.computed(res);
                })
            }
        })
    }
    // 封一个检测商品选中状态的函数
    checkStatus(obj,e){
        let reverSelected = '';
        if(obj.isSelected == 'true'){
            reverSelected = 'false';
        }else{
            reverSelected = 'true';
        }
        http.post('upProductqty',{username:'admin',id:obj.id,ischecked:reverSelected}).then(res=>{
           console.log(res)
           if(res){
                http.post('getProductCar',{username:'admin'}).then(res=>{
                    console.log(res)
                    // 调用函数
                    this.computed(res);
                })
           }
        })
    }

   
    componentDidMount(){
        // 初始化获取用户商品数据
        http.post('getProductCar',{username:'admin'}).then(res=>{
            if(res.status){
                console.log(res)
                // 调用计算总价和总数量的函数
                this.computed(res);
            }else{
                this.setState({
                    showCar:{display:'block'}
                })
            }
        })
    }
    render(){
        return (
            <div className="f-car">
                <ul className="car-header animate-route">
                    <li > 
                        <Link to="/">
                            <i className="fa fa-angle-left" aria-hidden="true"></i> 
                        </Link>
                    </li>
                    <li><span>购物车</span></li>
                    <li>
                        <Link to="/search"><i className="fa fa-search"></i></Link>
                    </li>
                </ul>
                <main className="car-main">
                    <div className="main-emtyCar" style={this.state.showCar}>
                        <div className="car-img car-box">
                            <img src="src/components/img/emptyCar.png" />
                        </div>
                        <div className="car-box">
                            <p>购物车还是空的 <Link to="">去逛逛</Link></p>
                        </div>
                    </div>
                    <div className="all-check">
                        <label htmlFor="allCheck">
                            <input type="checkbox" id="allCheck" />
                            <span>全选</span>
                        </label>
                    </div>
                    <ul className="main-user" >
                        {
                            this.state.userData.map((item,idx)=>{
                                return (
                                    <li key={idx}>
                                        <div className="user-input">
                                            <input type="checkbox" onChange={this.checkStatus
                                                .bind(this,{isSelected:item.isSelected,id:item.p_id})} checked = {item.isSelected == 'true' ? true : false} />
                                        </div>
                                        <div className="user-img">
                                            <img src={item.img}/>
                                        </div>
                                        <div className="user-info">
                                            <p className="name">{item.p_name}</p>
                                            <p className="price">售价：{item.p_price}元</p>
                                            <div className="handleCount">
                                                <div className="countBox">
                                                    <span className="count minus" onClick={this.handle.bind(this,{id:item.p_id,qty:item.qty})}>-</span>
                                                    <span className="qty">{item.qty }</span>
                                                    <span className="count add" onClick={this.handle.bind(this,{id:item.p_id,qty:item.qty})}>+</span>
                                                </div>
                                                <div className="delIcon" onClick={this.deleteProduct.bind(this,item.p_id)}>
                                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </main>
                <ul className="car-footer">
                    <li>
                        <p className="totalQty">共 {this.state.totalQty}件 金额：</p>
                        <p className="totalPrice"><span>{this.state.totalPrice}</span> 元</p>
                    </li>
                    <li>
                        <Link to="/">继续购物</Link>
                    </li>
                    <li>
                        <Link to="">去结算</Link>
                    </li>
                </ul>

            </div>
        )
    }
}