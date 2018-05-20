import React from 'react'
import $ from 'jquery'

import http from '../../utils/httpclient.js'
import './like.scss'
import {Link}from'react-router'

export default class Nav extends React.Component{


    state={
        date:[]

    }
    // 跳到详情页:将商品id传给详情页
    toDetails(product_id){
        console.log(product_id)
    }

    render(){
        let loveImg = '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg';
        return (
                    <ul className="main-love">
                        { 

                            this.state.date.map((item,idx)=>{
                                return (
                                    <li key={idx} onClick={this.toDetails.bind(this,item.product_id)}>
                                       
                                        <img src={idx == 0 ? loveImg:item.img_url}/>
                                      
                                        <span className="love-info" >
                                            
                                             <p className="brief" >
                                                {idx == 0 ? '':item.product_brief}
                                            </p>
                                            <p className="price"style={idx== 0 ? {display:'none' } : {display:'block'}} >
                                                ￥{item.product_price}
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
            // console.log(res);

            let dataList = res.data;
            let prl = [];
            for(var i=0;i<dataList.length;i++){
            if(dataList[i].type_goods=='goods'){

                prl.push(dataList[i]);
            }

            }
            this.setState({
                date:prl,
            })
            // this.date=prl;
            console.log(dataList)

        })
    }



}