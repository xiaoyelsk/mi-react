import React from 'react' 
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import {Provider} from 'react-redux'

import Index from './components/index/index.js'
import Classify from './components/classify/classify.js'
import Car from './components/car/car.js'
import Users from './components/users/users.js'


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Index} />
        <Route path="/classify" component={Classify} />
        <Route path="/car" component={Car} />
        <Route path="/users" component={Users} />
    </Router>,
    document.getElementById('app')
)