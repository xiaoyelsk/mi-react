import React from 'react'

import http from '../../utils/httpclient.js'
import './serverscss/users.scss'
import $ from 'jquery'


export default class Serveproduct extends React.Component{

    state = {
        goodslist:[],
        p_name:'',
        p_brief:'',
        img:'',
        price:'',
        type:'',
        p_id:''
    }

    componentDidMount(){

        http.post('getProduct').then((res) =>{
            let goods = []

            if(res.status){
                let data = res.data;

                for(let i = 0;i<data.length;i++){
                    if(data[i].type_goods == 'goods'){
                        goods.push(data[i])
                    }
                }
                this.setState({
                    goodslist:goods
                })
            }
            
        })
    }
    alter(idx){
        $('.pop').show();

        let obj = this.state.goodslist[idx];

        this.setState({
                    p_name:obj.product_name,
                    p_brief:obj.product_brief,
                    img:obj.img_url,
                    price:obj.product_price,
                    type:obj.type_text,
                    p_id:obj.product_id
                })
    }
    hide(){
        $('.pop').hide();
    }

    change1 = (e) =>{this.setState({p_name:e.target.value})}

    change2 = (e) =>{this.setState({p_brief:e.target.value})}

    change3 = (e) =>{this.setState({img:e.target.value})}

    change4 = (e) =>{this.setState({price:e.target.value})}

    change5 = (e) =>{this.setState({type:e.target.value})}

    save(){

        let data = {
            product_id:this.state.p_id,
            product_name:this.state.p_name,
            product_brief:this.state.p_brief,
            img_url:this.state.img,
            product_price:this.state.price,
            type_text:this.state.type
        }

        http.post('upProduct',data).then((res) =>{
            console.log(res);
            if(res.status){
                $('.pop').hide();

            } else {
                alert('修改商品失败！')
            }
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
                                    return  <tr key={idx}>
                                                <td>{item.product_id}</td>
                                                <td>{item.product_name}</td>
                                                <td>{item.product_brief}</td>
                                                <td>{item.img_url}</td>
                                                <td>{item.product_price}</td>
                                                <td>{item.type_text}</td>
                                                <td><button onClick={this.alter.bind(this,idx)}>修改</button><button>删除</button></td>
                                            </tr>
                                })
                            }
                        </tbody>
                </table>
                <div className="pop">
                    <h1>商品修改</h1>
                    <label for="pname">商品名称：</label><input type="text" id="pname" value={this.state.p_name} onChange={this.change1}/><br />
                    <label for="pbrief">商品介绍：</label><input type="text" id="pbrief" value={this.state.p_brief} onChange={this.change2}/><br />
                    <label for="img_url">商品路径：</label><input type="text" id="img_url" value={this.state.img} onChange={this.change3}/><br />
                    <label for="price">商品价格：</label><input type="text" id="price" value={this.state.price} onChange={this.change4}/><br />
                    <label for="type">商品类型：</label><input type="text" id="type" value={this.state.type} onChange={this.change5}/><br />
                    <button onClick={this.save.bind(this)}>保存</button><button onClick={this.hide.bind(this)}>取消</button>
                </div>
            </div>
        )
    }
}