import './all.scss'
import nat from '../../c/c.js'
import React from 'react'
import {Link} from 'react-router'

export default class All extends React.Component{
    render(){
        return (
             <div className="emtyTips" ref="emtyTips">
                        <div className="tipsImg">
                            <img src='https://s1.mi.com/m/images/m/empty.png' />
                        </div>
                        <p>抱歉，暂时没有与<span></span>相关的商品 </p>
            </div>
               

              
            )
    }
}