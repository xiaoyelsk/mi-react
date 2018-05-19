import './consig.scss'

import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import http from '../../../utils/httpclient'
import  addressInit from './jsAddress'

export default class SAconsig extends React.Component{
   
    constructor(props) {
        super(props)
        this.state = {
             name:'',
             phone:'',
             map:'',
             minutemap:'',
             tacitlyApprove:'设置为默认地址',
             type:''
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
        console.log(this.props.params.id)
        //判断跳转的类型
        var type = this.props.params.id;
        if(type == 'shippingAddress'){
            this.setState({type})
        }else if(type=='settleAccounts'){
            this.setState({type})
        }else{
            if(type){
                http.post('getSite',{id:this.props.params.id}).then((res)=>{
                    console.log(res)
                    // console.log(res.data[0])`
                    this.setState({name:res.data[0].nickname})
                    this.setState({phone:res.data[0].phone})
                    this.setState({map:res.data[0].map})
                    this.setState({minutemap:res.data[0].minutemap})
                })

            }
        }
        $('.city-Map').hide()
        addressInit('area','cmbProvince','cmbCity','cmbArea','华南地区', '广东', '广州市', '天河区');
            
           
    }
    toToggle(){
        this.props.router.push('/'+this.state.type)
    }   
    map(){

        $('.city-Map').toggle()
        this.setState({map:$('#cmbProvince').val() +$('#cmbCity').val()+$('#cmbArea').val()})
        $('input').addClass('in-acive')
        
    }
    baocun(){
        
        if(this.refs.name.value == ''){
            alert('真实姓名不能为空');
            return;
        }else if(this.state.type != 'shippingAddress' && this.state.type != 'settleAccounts'){
        //有id就修改
            let data={
                 id:this.props.params.id,
                  nickname:this.refs.name.value,
                  phone:this.refs.phone.value,
                  map:this.refs.map.value,
                  minutemap:this.refs.minutemap.value,
                  morenmap:this.refs.checkbox.checked,
                  state:'alter'
          }  
        //   console.log(data)
          http.post('addSite',data).then((res)=>{
            //   console.log(res)
              if(res.status){

                  this.props.router.push('/shippingAddress')
              } else {
                  alert('收货地址有误！')
              }
          })
       }else{
           //没有id就添加
           var uResult=  window.localStorage.getItem('un')
              let data={
                    username:uResult,
                    nickname:this.refs.name.value,
                    phone:this.refs.phone.value,
                    map:this.refs.map.value,
                    minutemap:this.refs.minutemap.value,
                    morenmap:this.refs.checkbox.checked,
                    state:'add'
            }  
            // console.log(data) 
            http.post('addSite',data).then((res)=>{
                // console.log(res)
                if(res.status){

                    this.props.router.push('/' + this.state.type)
                } else {
                    alert('收货地址有误！')
                }
            })
         }
       
       }
        
            
             
    render(){
        return (
            <div className="consig">
                 <div className="consig-head">
                    <p><i className="fa fa-angle-left jiesuan" onClick={this.toToggle.bind(this)}></i><span>新增地址</span></p> 
                </div>
                <div className="consig-main">
                    <from>
                        <div>
                            <label>收货人:</label>
                            <input type="type" className="consig-name " placeholder="真实姓名" value={this.state.name} onChange={this.change1} ref="name"/>
                        </div>
                        <br/>
                        <div>
                            <label>手机号码:</label>
                            <input type="type" className="consig-phone" placeholder="手机号" value={this.state.phone} onChange={this.change2} ref="phone"/>
                        </div>
                        <br/>
                        <div>
                            <label>所在地区:</label>
                            <input type="type" className="consig-map select-value form-control" placeholder="省 市 区  街道信息" value={this.state.map} onChange={this.change3} ref="map" onClick={this.map.bind(this)}/>
                        </div>
                        <br/>
                        <div>
                            <label>详细地址:</label>
                            <input type="type" className="consig-minutemap" placeholder="详细地址" value={this.state.minutemap} onChange={this.change4} ref="minutemap"/>
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