import {Router,Route,hashHistory} from 'react-router'
import React from 'react'

import Index from '../components/index/index.js'
import Classify from '../components/classify/classify.js'
import Car from '../components/car/car.js'
import Users from '../components/users/users.js'
//婷婷
import Login from '../components/users/login/login.js'
import Register from '../components/users/register/register.js'
import SettleAccounts from '../components/car/settleAccounts/settleAccounts.js'
import Consig from '../components/car/consig/consig.js'
import Quit from '../components/users/quit/quit.js'
import ShippingAddress from '../components/users/shippingAddress/shippingAddress.js'
import SAconsig from '../components/users/SAconsig/SAconsig.js'

import Datelist from '../components/datelist/goods.js'

// 方汉佳
import List from '../components/list/list.js';
import Search from '../components/search/search.js';
import Order from '../components/order/order.js'


import ServerLogin from '../components/server/serverlogin.js'
import ServerHome from '../components/server/serverhome.js'





export default class Routers extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index} />
                <Route path="/classify" component={Classify} />
                <Route path="/car(/:p_id)" component={Car} />
                <Route path="/goods(/:product_id)" component={Datelist} />
              
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/settleAccounts" component={SettleAccounts} />
                <Route path="/consig" component={Consig} />
                <Route path="/list(/:type)(/:num)" component={List} />
                <Route path="/search" component={Search} />
                <Route path="/serverlogin" component={ServerLogin} />
                <Route path="/serverhome" component={ServerHome} />
                <Route path="/quit" component={Quit} />
                <Route path="/order" component={Order} />
                <Route path="/shippingAddress" component={ShippingAddress} />
                <Route path="/SAconsig" component={SAconsig} />
                
                
            </Router>
        )
    }
}

