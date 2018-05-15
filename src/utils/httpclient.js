import axios from 'axios'

const baseUrl = 'http://10.3.133.39:88/'
let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

// loading效果
import '../components/css/base.css'
import $ from 'jquery';
let $loadingBox =  $('<div></div>');
let $icon = $('<i></i>');
// 创建元素并添加类名
$loadingBox.addClass('loading');
$icon.addClass('fa fa-spinner fa-pulse loading-icon');
// 插入到页面
$('body').append($loadingBox.append($icon))
// 默认隐藏
$loadingBox.hide();

export default {
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios.get(filterUrl(_url), {params: _params}).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            // axios.post(filterUrl(_url), _params).then((res) => {
            //     resolve(res)
            // }).catch((error) => {
            //     reject(error)
            // })
            // 显示loading
            $loadingBox.show();
            axios({
                url: filterUrl(_url),
                method: 'post',
                data: _params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'auth': window.localStorage.getItem('token')
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }], 
            }).then(res => {
                if(!res.data.status && res.data.message == "unauth"){
                    
                    return false;
                }               
                
                resolve(res.data)
                // 隐藏loading
                $loadingBox.delay(500).hide(0);
            }).catch(error => {
                
                reject(error)
            })            
        })
    },
    upload(_params){
        $.ajax({
            url: filterUrl(_params.url),
            type: 'post',
            data: _params.data,
            contentType: false,
            processData: false,
            success: function(res){
                if(!res.status && res.message == 'unauth'){
                    window.location.href = 'login.html';
                } else {
                    _params.cb(res);
                }
                //hide loadding
            }
        })
    }
}