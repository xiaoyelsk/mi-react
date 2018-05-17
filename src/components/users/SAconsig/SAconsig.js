import '../../car/consig/consig.scss'

import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import http from '../../../utils/httpclient'
import  addressInit from './jsAddress'

export default class SAconsig extends React.Component{
   
    constructor(props) {
        super(props)
        this.state = {
             name:'真实姓名',
             phone:' 手机号',
             map:'省 市 区  街道信息',
             minutemap:'详细地址',
             tacitlyApprove:'设置为默认地址'
        }
    }
    change1 = (e) => {
           this.setState({name:e.target.value})
        }
    change2 = (e) => {
            this.setState({phone:e.target.value})
         }
    change3= (e) => {
            this.setState({map:e.target.value})
         } 
    change4 = (e) => {
            this.setState({minutemap:e.target.value})
         } 

    componentDidMount(){
            $('.city-Map').hide()
            addressInit('area','cmbProvince','cmbCity','cmbArea','华南地区', '广东', '广州市', '天河区'); 
            
    }
       
        map(){

            $('.city-Map').toggle()
            this.setState({map:$('#cmbProvince').val() +$('#cmbCity').val()+$('#cmbArea').val()})
            $('input').addClass('in-acive')
           
        }
    baocun(){
            var uResult=  window.localStorage.getItem('un')
              let data={
                    username:uResult,
                    nickname:this.refs.name.value,
                    phone:this.refs.phone.value,
                    map:this.refs.map.value,
                    minutemap:this.refs.minutemap.value,
                    morenmap:this.refs.checkbox.checked
            }  
            console.log(data) 
            http.post('addSite',data).then((res)=>{
                console.log(res)
                if(res.status){

                    this.props.router.push('/shippingAddress')
                } else {
                    alert('收货地址有误！')
                }
            })
         }
             
    render(){
        return (
            <div className="consig">
                 <div className="consig-head">
                    <p><Link to='/shippingAddress'><i className="fa fa-angle-left jiesuan"></i></Link><span>新增地址</span></p> 
                </div>
                <div className="consig-main">
                    <from>
                        <div>
                            <label>收货人:</label>
                            <input type="type" className="consig-name " placeholder={this.state.name} onChange={this.change1} ref="name"/>
                        </div>
                        <br/>
                        <div>
                            <label>手机号码:</label>
                            <input type="type" className="consig-phone" placeholder={this.state.phone} onChange={this.change2} ref="phone"/>
                        </div>
                        <br/>
                        <div>
                            <label>所在地区:</label>
                            <input type="type" className="consig-map select-value form-control" value={this.state.map} onChange={this.change3} ref="map" onClick={this.map.bind(this)}/>
                        </div>
                        <br/>
                        <div>
                            <label>详细地址:</label>
                            <input type="type" className="consig-minutemap" placeholder={this.state.minutemap} onChange={this.change4} ref="minutemap"/>
                        </div>
                        <br/>
                        <div>
                           
                            <p type="type" className="consig-tacitlyApprove">
                            {this.state.tacitlyApprove} 
                            <input type="checkbox" className="consig-morenMap" ref="checkbox"/>
                            </p>
                        </div>
                        <br/>
                    </from>
                </div>
                <div className="city-Map"> 
                    <ul>
                        <li><select id="area"></select></li> 
                        <li><select id="cmbProvince"></select></li> 
                        <li><select id="cmbCity"></select></li>
                        <li><select id="cmbArea"></select></li>
                    </ul> 
                </div>  
                 <div className="consig-foot" onClick={this.baocun.bind(this)}>
                        <input type="button"  value="保存地址" className="consig-saveMap"/>
                </div>
            </div>
        )
    }
}