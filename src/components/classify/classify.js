import React from 'react'
import Footer from '../footer/footer.js'
import $ from 'jquery'

export default class classify extends React.Component{
    componentDidMount(){
        $('.classify').addClass('ative').siblings('a').removeClass('ative')
    }
    render(){
        return (
            <div>
                <h1>分类</h1>
                <Footer />
            </div>
        )
    }
}