import React from 'react'
import $ from 'jquery'

import Footer from '../footer/footer.js'

export default class car extends React.Component{
    componentDidMount(){
        $('.car').addClass('ative').siblings('a').removeClass('ative')
    }
    render(){
        return (
            <div>
                <h1>Car</h1>
                <Footer />
            </div>
        )
    }
}