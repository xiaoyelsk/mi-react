import React from 'react'
import $ from 'jquery'

import Footer from '../footer/footer.js'

export default class users extends React.Component{
    componentDidMount(){
        $('.users').addClass('ative').siblings('a').removeClass('ative')
    }
    render(){
        return (
            <div>
                <h1>users</h1>
                <Footer />
            </div>
        )
    }
}