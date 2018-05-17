import React from 'react'

import http from '../../utils/httpclient.js'
import './serverscss/users.scss'

export default class Serverusers extends React.Component{

    state = {
        userlist:[]
    }

    componentDidMount(){

        http.get('getUser').then((res) =>{

            this.setState({
                userlist:res.data
            })

            console.log(this.state.userlist)
        })
    }
    deluser(){

        
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
                                        <td><button>修改</button><button>删除</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                </table>
            </div>
        )
    }
}