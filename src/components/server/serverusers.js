import React from 'react'

import http from '../../utils/httpclient.js'
import './serverscss/users.scss'
import $ from "jquery"

export default class Serverusers extends React.Component{

    state = {
        userlist:[],
        username:'',
        password:'',
        beizhu:''
    }

    componentDidMount(){

        http.get('getUser').then((res) =>{

            this.setState({
                userlist:res.data
            })

            console.log(this.state.userlist)
        })
    }
    alter(){
        $('.pop').show();
    }
    hide(){
        $('.pop').hide();
    }
    sava(){

    }
    render(){
        return (
            <div className="k_user">
                <table className="table">
                    <thead>
                        <tr>
                            <th>用户名</th>
                            <th>密码</th>
                            <th>备注</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                this.state.userlist.map((item,idx) =>{
                                    return <tr key={idx}>
                                        <td>{item.username}</td>
                                        <td>{item.password}</td>
                                        <td></td>
                                        <td><button onClick={this.alter.bind(this)}>修改</button><button>删除</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                </table>
                <div className="pop">
                    <h1>用户修改</h1>
                    <label for="pname">用户：</label><input type="text" id="pname" value={this.state.p_name} onChange={this.change1}/><br />
                    <label for="pbrief">密码：</label><input type="text" id="pbrief" value={this.state.p_brief} onChange={this.change2}/><br />
                    <label for="img_url">备注：</label><input type="text" id="img_url" value={this.state.img} onChange={this.change3}/><br />
                    <button>保存</button><button onClick={this.hide.bind(this)}>取消</button>
                </div>
            </div>
        )
    }
}