import {Router,Route,hashHistory} from 'react-router'
import React from 'react'

import Index from '../components/index/index.js'
import Classify from '../components/classify/classify.js'
import Car from '../components/car/car.js'
import Users from '../components/users/users.js'


import Datelist from '../components/datelist/goods.js'


export default class Routers extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index} />
                <Route path="/classify" component={Classify} />
                <Route path="/car" component={Car} />
                <Route path="/goods" component={Datelist} />
              
                <Route path="/users" component={Users} />
            </Router>
        )
    }
}

