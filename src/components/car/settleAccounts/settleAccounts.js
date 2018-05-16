import './settleAccounts.scss' 
import React from 'react'
import {Link} from 'react-router'

import $ from 'jquery'

export default class SettleAccounts extends React.Component{
    state = {
        peisong:'不限送货时间',
        zong:'0',
        total:'0',
        mz:'',
        addmap:'添加收货地址',

        productData:[
            {
                img_url:"//i1.mifile.cn/a1/pms_1521165501.80114213!80x80.jpg",
                product_name:"红米Note5  全网通版 4GB内存 64GB 金色",
                product_id:"1",
                product_price:"1399.00",
                type:'xinpin',
                num:1
            },
            {
                img_url:"//i1.mifile.cn/a1/pms_1509612558.56879257!80x80.jpg",
                product_name:"米加便携电动剃须刀  黑色",
                product_id:"2",
                product_price:"179.00",
                type:'xinpin',
                num:1
            },
            {
                img_url:"//i1.mifile.cn/a1/pms_1508125822.19716710!80x80.jpg",
                product_name:"红米5A 2GB内存 铂银灰 16GB",
                product_id:"3",
                product_price:"599.00",
                type:'xinpin',
                num:1
            }
        ]

    }
    componentDidMount(){
        // 收货地址
            this.mz = window.localStorage.getItem('mz')
            this.dizhi = window.localStorage.getItem('dizhi')
            
            // console.log(this.dizhi)
            this.setState({mz:this.mz})
            this.setState({addmap:this.dizhi})

            if( this.mz == null && this.dizhi == null ){
                this.setState({addmap:'添加收货地址'})
            }

        //计算总数、总价
        // console.log(this.state.productData[0].product_price)
            var totalPrice=0;
            var totalNum=0;
        for(var i=0;i<this.state.productData.length;i++){
            var product= this.state.productData;
        //    console.log(product[i].product_price)
            totalPrice += Number(product[i].product_price);
            totalNum += Number(product[i].num); 
        }
            //   console.log(totalPrice)
              this.setState({total:totalPrice})
              this.setState({zong:totalNum})
          //选择收货地址的高亮效果  
         
         
          
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
                            <Link to='/consig'> 
                                <h5>{this.state.mz}{this.state.addmap}
                                    <i className="fa fa-angle-right shouhuo"></i>
                                </h5> 
                            </Link>   
                        </div>
                         
                    <div className="settle-zhifu">
                        <ul className="settle-zffs" >
                            <div ref="xianshi">
                                <li>
                                    <span>微信支付</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <span>支付宝</span><span className="beizhu">支付订单，赢1999元红包</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <span>小米钱包</span><span className="beizhu">绑新卡支付，享最高立减99元</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                            </div>
                            <div className="yincang">
                                <li>
                                    <span>银联在线支付</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <span>翼支付</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
                                    <span>小米分期</span>
                                    <input type="radio" className="danxuan" name="danxuan" />
                                </li>
                                <li>
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
                                                    <img src={item.img_url}/>
                                                </div>
                                                <div className="S-info">
                                                    <p className="content">{item.product_name}</p>
                                                    <span className="price">￥{item.product_price}</span>
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
                        <div className="settle-goright">
                           去付款
                        </div>
                    </div>
            </div>
        )
    }
   
}
