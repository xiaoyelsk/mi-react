import React from 'react'
import {Link} from 'react-router'

import './serverscss/home.scss'
import Serverusers from './serverusers.js'
import Serverproduct from './serverproduct.js'

export default class ServerHome extends React.Component{
    render(){
        return (    
            <div id="Shome">
                <h1>后台管理系统</h1>
                <ul>
                    <li><Link to="/serverhome/serveruser">用户管理</Link></li>
                    <li><Link to="/serverhome/serverproduct">商品管理</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}