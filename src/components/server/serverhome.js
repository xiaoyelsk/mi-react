import React from 'react'

import './serverscss/home.scss'
import Serverusers from './serverusers.js'

export default class ServerHome extends React.Component{
    render(){
        return (    
            <div id="Shome">
                <h1>后台管理系统</h1>
                <ul>
                    <li>用户管理</li>
                    <li>商品管理</li>
                </ul>
                <Serverusers />
            </div>
        )
    }
}