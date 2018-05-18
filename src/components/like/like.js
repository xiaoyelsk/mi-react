import React from 'react'
import $ from 'jquery'

import http from '../../utils/httpclient.js'
import './like.scss'
import {Link}from'react-router'

export default class Nav extends React.Component{


    state={
        date:[]

    }

    render(){
        let loveImg = '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg';
        return (
                    <ul className="main-love">
                        { 

                            this.state.date.map((item,idx)=>{
                                return (
                                    <li key={idx} >
                                       
                                        <img src={idx == 0 ? loveImg:item.img_url}/>
                                      
                                        <span className="love-info" >
                                            
                                             <p className="brief" style={item.product_brief ? {display:'block' } : {display:'none'}}>
                                                {item.product_brief}
                                            </p>
                                            <p className="price"style={item.product_price ? {display:'block' } : {display:'none'}} >
                                                ￥{item.product_id}
                                            </p>
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
        )
    }
   componentDidMount(){
http.post('searchProduct').then((res)=>{
            console.log(res);
            this.setState({
                    date:res.data,
                })
                    let dataList = res.data;
                    let prl = [];
                for(var i=0;i<dataList.length;i++){
                    prl.push(dataList[i]);
                }
                    this.date=prl;
                    console.log(this.date)

        })
    }



}