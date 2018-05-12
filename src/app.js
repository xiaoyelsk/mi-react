import React from 'react' 
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

import Routers from './routers/routers.js'

ReactDOM.render(
    <Routers />,
    document.getElementById('app')
)