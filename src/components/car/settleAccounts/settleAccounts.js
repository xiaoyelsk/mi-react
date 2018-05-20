import './settleAccounts.scss' 
import React from 'react'
import {Link} from 'react-router'

import $ from 'jquery'
import http from '../../../utils/httpclient'
export default class SettleAccounts extends React.Component{
    state = {
        peisong:'不限送货时间',
        zong:'0',
        total:'0',
        mz:'',
        addmap1:'添加收货地址',
        addmap2:'',
        addmap3:'',

        productData:[],
        // 用户名
        username:'',
        // 显示弹窗
        showMasked:{display:'none'}
    }
    // 封一个确定付款的函数
    comfirm(){
        let username = this.state.username;
        let products = JSON.stringify(this.state.productData);
        let isPay = 'true';
        if(username && products){
            http.post('addorder',{username,products,isPay}).then(res=>{
                if(res.status){
                    this.props.router.push('/order');
                }
            })
        }
        this.setState({
            showMasked:{display:'none'}
        })    
        
    }
    // 封一个取消付款的函数
    cancel(){
        let username = this.state.username;
        let products = JSON.stringify(this.state.productData);
        let isPay = 'false';
        if(username && products){
            http.post('addorder',{username,products,isPay}).then(res=>{
                this.props.router.push('/order');
            })
        }    
        this.setState({
            showMasked:{display:'none'}
        })
        
    }


    // 封一个去付款的函数:获取用户名,商品数据
    toPay(){
        if(this.state.productData.length < 1){
            return;
        }else if(this.state.addmap2 == '' || this.state.addmap3 == ''){
            alert('地址有误！');
            return;
        }else{
            this.setState({
                showMasked:{display:'block'}
            })

        }
    }

    componentDidMount(){
        // 收货地址

        var username=  window.localStorage.getItem('un');
        this.setState({
            username
        })

        http.post('getSite',{username:username}).then((res) =>{
            console.log(res)
            if(res.status){
                var idx = res.data.length-1;

                this.setState({
                    addmap1:res.data[idx].nickname || '',
                    addmap2:res.data[idx].phone || '',
                    addmap3:res.data[idx].map +res.data[idx].minutemap
                })
            }
            
        })
        if(this.state.addmap1 == ''){
            this.setState({addmap1:'添加收货地址'})
        }else{
            var username =  window.localStorage.getItem('un');
            this.setState({
                username
            })

            http.post('getSite',{username:username}).then((res) =>{
                // console.log(res)
                // console.log(res.data.length-1)
                var idx = res.data.length-1;
                console.log(res.data[idx])
                if(res.status){

                    this.setState({
                        addmap1:res.data[idx].nickname,
                        addmap2:res.data[idx].phone,
                        addmap3:res.data[idx].map +res.data[idx].minutemap
                    })
                }
                
            })
        }

        // 获取用户已勾选的商品
        if(username){
            let productData = [];
            http.post('getProductCar',{username}).then(res=>{
                if(res.status){
                    for(var i=0;i<res.data.length;i++){
                        if(res.data[i].isSelected == 'true'){
                            console.log(res.data[i])
                            productData.push(res.data[i])
                        }
                    }
                    this.setState({
                        productData
                    })

                    //计算总数、总价
                    var totalPrice=0;
                    var totalNum=0;
                    for(var i=0;i<this.state.productData.length;i++){
                        var product= this.state.productData;
                    //    console.log(product[i].product_price)
                        totalPrice += Number(product[i].p_price);
                        totalNum += Number(product[i].qty); 
                    }
                    //   console.log(totalPrice)
                    this.setState({total:totalPrice})
                    this.setState({zong:totalNum})
                }
            })
        }
    }
    toSAconsig(){
        this.props.router.push('/SAconsig/settleAccounts')
    }
    switchover(){
      
            $('.yincang').toggle();
            $('.toggleT1').toggle();
            $('.toggleT2').toggle();
            $('#toggleI1').toggle()
            $('#toggleI2').toggle()
    
    }
    peisong(){
        $('.xuanzepeisong').toggle()
        $('#toggleI11').toggle()
        $('#toggleI22').toggle()
    }
    pssj1(){
        $('.xuanzeTime1').addClass('XTative').siblings('li').removeClass('XTative');
        this.setState({ peisong:'不限送货时间'})
    }
    pssj2(){
        $('.xuanzeTime2').addClass('XTative').siblings('li').removeClass('XTative');
        this.setState({ peisong:'工作日送货'})
    }
    pssj3(){
        $('.xuanzeTime3').addClass('XTative').siblings('li').removeClass('XTative');
        this.setState({ peisong:'双休日、假日送货'})
    }
    render(){
        return (
            <div className="settleAccounts">
                <div className="settle-head">
                    <p><Link to='/car'><i className="fa fa-angle-left jiesuan"></i></Link><span>用户结算</span></p> 
                </div>
                <div className="settle-main">
                   
                        <div className="settle-shouhuo">
                            
                                <h5 onClick={this.toSAconsig.bind(this)}>
                                   <p>
                                       <span>{this.state.addmap1}</span>
                                       <span>{this.state.addmap2}</span>
                                    </p>
                                   <p>{this.state.addmap3}</p>
                                    <i className="fa fa-angle-right shouhuo"></i>
                                </h5> 
                              
                        </div>
                         
                    <div className="settle-zhifu">
                        <ul className="settle-zffs" >
                            <div ref="xianshi">
                                <li>
                                    <img src="//s1.mi.com/m/images/m/pay_wx.png" />
                                    <span>微信支付</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <img src="//s1.mi.com/m/images/m/pay_zfb2.png" />
                                    <span>支付宝</span><span className="beizhu">支付订单，赢1999元红包</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <img src="//s1.mi.com/m/images/m/micash_wap.png" />
                                    <span>小米钱包</span><span className="beizhu">绑新卡支付，享最高立减99元</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                            </div>
                            <div className="yincang">
                                <li>
                                    <img src="//s1.mi.com/m/images/m/pay_yl1.png" />
                                    <span>银联在线支付</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <img src="//s1.mi.com/m/images/m/pay_yzf.png" />
                                    <span>翼支付</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <img src="//s1.mi.com/m/images/m/pay_mifinanceinstal.png" />
                                    <span>小米分期</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <img src="//s1.mi.com/m/images/m/pay_antinstalment.png" />
                                    <span>花呗分期</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                            </div>
                                <p onClick={this.switchover.bind(this)} ref="switchover"> 
                                    <span className="toggleT1" >使用其他付款方式</span>
                                    <span className="toggleT2" >收起其他付款方式</span>
                                    <i className="fa fa-chevron-down " id="toggleI1"></i>
                                    <i className="fa fa-chevron-up shangjiantou" id="toggleI2"></i>
                                </p>
                        </ul>
                    </div>
                    <div className="settle-peisong">
                        <ul>
                            <li >
                                <span>快递配送(免运费)</span>
                                <span className="xuanxiang1" onClick={this.peisong.bind(this)}>{this.state.peisong}</span>
                                <i className="fa fa-chevron-down " id="toggleI11"></i>
                                <i className="fa fa-chevron-up shangjiantou" id="toggleI22"></i>
                                <div className="xuanzepeisong">
                                    <div className="xuanze1">
                                        <p className="xuanze2">配送方式</p>
                                        <p className="xuanze3">快递配送(免运费)</p>

                                    </div>
                                    <div className="xuanzetime">
                                        <p className="xuanze2">送货时间</p>
                                        <ul>
                                            <li className="xuanzeTime1" onClick={this.pssj1.bind(this)}><span>不限送货时间</span></li>
                                            <li className="xuanzeTime2" onClick={this.pssj2.bind(this)}><span>工作日送货</span></li>
                                            <li className="xuanzeTime3" onClick={this.pssj3.bind(this)}><span>双休日、假日送货</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>电子发票</span>
                                <span className="xuanxiang2">个人</span>
                                <i className="fa fa-chevron-down" ></i>
                            </li>
                            <li>
                                <span>优惠券</span>
                                <span className="xuanxiang3">已优惠<span>0元</span></span>
                                <i className="fa fa-chevron-down" ></i>
                            </li>
                        </ul>
                    </div>
                    <div className="settle-productxinxi">
                        <ul>
                            {
                                this.state.productData.map((item,index)=>{
                                    return (<li key={index}>
                                                <div className="S-img">
                                                    <img src={item.img}/>
                                                </div>
                                                <div className="S-info">
                                                    <p className="content">{item.p_name}</p>
                                                    <span className="price">{item.qty} &times; ￥{item.p_price}</span>
                                                </div>
                                            </li>)
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="settle-settlexinxi" >
                        <ul>
                            <li>商品价格:{this.state.total}元</li>
                            <li>已优惠:0.00</li>
                            <li>配送费用:0.00</li>
                        </ul>
                    </div>
                    
                    
                </div>
                <div className="settle-gofukuan" >
                        <div className="settle-goleft">
                            <span className="totalNum">共{this.state.zong} 件</span>
                             <span className="totalPrice">合计:{this.state.total}元</span>
                        </div>
                        <div className="settle-goright" onClick={this.toPay.bind(this)}>
                           去付款
                        </div>
                    </div>
                <div className="f-masked" style={this.state.showMasked}>
                    <div className="masked-box">
                        <p>确定付款?</p>
                        <button className="btn-comfim" onClick={this.comfirm.bind(this)}>确定</button>
                        <button className="btn-cancel" onClick={this.cancel.bind(this)}>取消</button>
                    </div>
                </div>
            </div>
        )
    }
   
}
