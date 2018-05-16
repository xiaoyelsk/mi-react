import './consig.scss'
import React from 'react'
import {Link} from 'react-router'
import http from '../../../utils/httpclient'

export default class Consig extends React.Component{
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
    baocun(){
              let data={
                    nickname:this.refs.name.value,
                    username:this.refs.phone.value,
                    map:this.refs.map.value,
                    minutemap:this.refs.minutemap.value
            }  
            console.log(data) 
            http.post('update',data).then((res)=>{
                console.log(res)
                if(res.status){
                    window.localStorage.setItem('mz',res.data.nickname);
                    window.localStorage.setItem('dizhi',res.data. minutemap);
                    this.props.router.push('/settleAccounts')
                } else {
                    alert('收货地址有误！')
                }
            })
         }
             
    render(){
        return (
            <div className="consig">
                 <div className="consig-head">
                    <p><Link to='/settleAccounts'><i className="fa fa-angle-left jiesuan"></i></Link><span>新增地址</span></p> 
                </div>
                <div className="consig-main">
                    <from>
                        <div>
                            <label>收货人:</label>
                            <input type="type" className="consig-name" placeholder={this.state.name} onChange={this.change1} ref="name"/>
                        </div>
                        <br/>
                        <div>
                            <label>手机号码:</label>
                            <input type="type" className="consig-phone" placeholder={this.state.phone} onChange={this.change2} ref="phone"/>
                        </div>
                        <br/>
                        <div>
                            <label>所在地区:</label>
                            <input type="type" className="consig-map" placeholder={this.state.map} onChange={this.change3} ref="map"/>
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
                            <input type="checkbox" className="consig-morenMap" />
                            </p>
                        </div>
                        <br/>
                    </from>
                </div>

                 <div className="consig-foot" onClick={this.baocun.bind(this)}>
                        <input type="button"  value="保存地址" className="consig-saveMap"/>
                </div>
            </div>
        )
    }
}