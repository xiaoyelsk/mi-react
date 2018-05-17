import React from 'react'

import http from '../../utils/httpclient.js'
import './serverscss/users.scss'

export default class Serveproduct extends React.Component{

    state = {
        goodslist:[]
    }

    componentDidMount(){

        http.post('getProduct').then((res) =>{

            this.setState({
                goodslist:res.data
            })

            console.log(this.state.goodslist)
        })
    }
    render(){
        return (
            <div className="k_user">
                <table className="table">
                    <thead>
                        <tr>
                            <th>商品ID</th>
                            <th>商品名称</th>
                            <th>商品介绍</th>
                            <th>图片路径</th>
                            <th>商品价格</th>
                            <th>商品类型</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                this.state.goodslist.map((item,idx) =>{
                                    return <tr key={idx}>
                                                <td>{item.product_id}</td>
                                                <td>{item.product_name}</td>
                                                <td>{item.product_brief}</td>
                                                <td>{item.img_url}</td>
                                                <td>{item.product_price}</td>
                                                <td>{item.type_text}</td>
                                                <td><button>修改</button><button>删除</button></td>
                                            </tr>
                                })
                            }
                        </tbody>
                </table>
            </div>
        )
    }
}