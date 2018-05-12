import React from 'react'
import $ from 'jquery'

import Footer from '../footer/footer.js'
import './index.scss'

export default class Index extends React.Component{
    componentDidMount(){
        $('.home').addClass('ative').siblings('a').removeClass('ative')
    }
    render(){
        return (
            <div id="index">
                <div className="header">
                    Header
                </div>
                <div className="main">
                    
                </div>
                <Footer />
            </div>
        )
    }
}


