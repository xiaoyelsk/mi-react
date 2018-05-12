import './footer.scss'

import React from 'react'
import {Link} from 'react-router'

export default class Footer extends React.Component{
    render(){
        return (
            <ul className="footer">        
                <li><Link to="/" className="home"><i className="fa fa-home"></i><span>首页</span></Link></li>
                <li><Link to="/classify" className="classify"><i className="fa fa-server" aria-hidden="true"></i><span>分类</span></Link></li>
                <li><Link to="/car" className="car"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>购物车</span></Link></li>
                <li><Link to="/users" className="users"><i className="fa fa-user-o" aria-hidden="true"></i><span>我的</span></Link></li>
            </ul>
        )
    }
}