import './shippingAddress.scss'
import React from 'react'
import $ from 'jquery'

import http from '../../../utils/httpclient'
import {Link}from'react-router'

export default class ShippingAddress extends React.Component{
    state ={
        addmap:[]
    }
   componentDidMount(){
        var uResult=  window.localStorage.getItem('un');

        http.post('getSite',{username:uResult}).then((res) =>{
            console.log(res)
            this.setState({
                addmap:res.data
            })
        })
   }
   footAdd(){
    //    console.log(this)
       this.props.router.push('/SAconsig/shippingAddress')
   }
   del(minutemap){
      
        // console.log(minutemap)
      
       http.post('delSite',{minutemap}).then((res)=>{
        // console.log(res)
        if(res){
            var uResult=  window.localStorage.getItem('un');
            http.post('getSite',{username:uResult}).then((res) =>{
                // console.log(res)
                this.setState({
                    addmap:res.data
                })
            })
        }
     })
   }
   xiugai(_id){
    //    console.log(_id)
       this.props.router.push("/SAconsig/" +_id)
   }
    render(){
        return (
                <div className="shippingAddress">
                        <div className="SA-head">
                            <Link to="/quit"><i className="fa fa-angle-left quit-icon"></i></Link>
                            <input type="button" value="收货地址" className="tuichulogin1"/>  
                        </div>
                        <div className="SA-main">
                            <ul ref="bianli">
                            {
                                this.state.addmap.map((item,index)=>{
                                    return (<li key={index}>
                                                <div className="shangxin">
                                                    <p><span>{item.nickname}</span><span>{item.phone}</span></p>
                                                    <i className="Shanchu" onClick={this.del.bind(this,item.minutemap)}>删除</i>
                                                </div>
                                                <div className="shangxia">
                                                    <span>{item.map}</span>
                                                    <p  ref="minutemap">{item.minutemap}</p>
                                                    <i className="fa fa-angle-right Syoujiantou" onClick={this.xiugai.bind(this,item._id)}>
                                                    </i>
                                                </div>
                                            </li>)
                                })
                            }
                            </ul>
                        </div>
                        <div className="SA-foot">
                                
                                    <input type="button" value="新建地址" className="SA-footAdd" onClick={this.footAdd.bind(this)}/>
                                
                        </div>
                </div>
        )
    }
}