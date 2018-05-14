import React from 'react'

import './serverscss/users.scss'

export default class Serverusers extends React.Component{
    render(){
        return (
            <div className="Users">
                <table>
                    <thead>
                        <tr>
                            <th>用户名</th>
                            <th>密码</th>
                            <th>电话</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>张三</td>
                            <td>密码</td>
                            <td>18777953333</td>
                            <td>阿萨德会卡死</td>
                        </tr>
                        <tr>
                            <td>张三</td>
                            <td>密码</td>
                            <td>18777953333</td>
                            <td>阿萨德会卡死</td>
                        </tr>
                        <tr>
                            <td>张三</td>
                            <td>密码</td>
                            <td>18777953333</td>
                            <td>阿萨德会卡死</td>
                        </tr>
                        <tr>
                            <td>张三</td>
                            <td>密码</td>
                            <td>18777953333</td>
                            <td>阿萨德会卡死</td>
                        </tr>
                        <tr>
                            <td>张三</td>
                            <td>密码</td>
                            <td>18777953333</td>
                            <td>阿萨德会卡死</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}