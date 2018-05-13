import './classify.scss'
import React from 'react'
import Footer from '../footer/footer.js'
import $ from 'jquery'


export default class Classify extends React.Component{
    // 返回到首页
    backIndex(){
        this.props.router.push('/')
    }
    componentDidMount(){
        $('.classify').addClass('ative').siblings('a').removeClass('ative')
    }
    render(){
        return (
            <div className="f-classify">
                <ul className="f-header">
                    <li onClick={this.backIndex.bind(this)}> <i className="fa fa-angle-left" aria-hidden="true"></i> </li>
                    <li><span>分类</span></li>
                    <li><i className="fa fa-search"></i></li>
                </ul>
                <div className="f-main">
                    <div className="f-navBar">
                        <ul className="f-navTitle">
                            <li>
                            </li>
                        </ul>
                    </div>
                    <div className="f-wrap">
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}