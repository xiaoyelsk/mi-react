// 搜索组件
import './search.scss'
import React from 'react';

export default class Search extends React.Component{
    state = {
        keyword:[
            {product_name:'红米Note 5'},
            {product_name:'净水器厨下'},
            {product_name:'小米MIX 2'},
            {product_name:'小米笔记本Pro'},
            {product_name:'小米 6X'},
        ]
    }
    // 封一个回到首页的函数
    toIndex(){
        this.props.router.push('/')
    }
    // 封一个点击获取关键字并传给列表的函数
    getKeyword(){
        let keyword = this.refs.searchBox.value;
        let numType = 'search';
        if(keyword.length < 1){
            return;
        }else{
            this.props.router.push('/list/'+keyword+'/'+numType);
        }
    }
    // 封一个获取文字的函数
    getText(e){
        let keyword = e.target.innerText;
        let numType = 'search';
        if(keyword.length < 1){
            return;
        }else{
            this.props.router.push('/list/'+keyword+'/'+numType);
        }
    }
    // 不带参数直接跳到列表页
    toList(){
        this.props.router.push('/list');
    }
    render(){
        return (
            <div className="f-search">
                <ul className="search-header animate2-route">
                    <li onClick={this.toIndex.bind(this)}> <i className="fa fa-angle-left" aria-hidden="true"></i></li>
                    <li>
                        <input type="text" placeholder="搜索商品名称" ref="searchBox"/>
                    </li>
                    <li onClick={this.getKeyword.bind(this)}><i className="fa fa-search"></i></li>
                </ul>
                <main className="search-main animate2-route">
                    <ul className="main-hot">
                        <li>热门搜索</li>
                        <li onClick={this.toList.bind(this)}><img src="https://i8.mifile.cn/b2c-mimall-media/38af6033fa4409e3844029d76b60cdc6.jpg?bg=FFFFFF"/></li>
                    </ul>
                    <ul className="main-keyword">
                        {
                            this.state.keyword.map((item,idx)=>{
                                return <li onClick={this.getText.bind(this)} key={idx}>{item.product_name}</li>
                            })
                        }
                    </ul>
                </main>
            </div>
        )
    }
}