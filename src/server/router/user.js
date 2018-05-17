const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')
const jwt = require('jsonwebtoken');

// 判断用户是否已登陆
let filter = function(req,res,next){
    // 获取前端的token
    let token = req.headers['auth'];
    if(!token){
        res.send(apiResult(false,{},'unauth'));
    }else{
        jwt.verify(token,'1234',(error,result)=>{
            if(error){
                res.send(apiResult(false,{},'unauth'));
            }else{
                next();
            }
        })
    }
}

module.exports = {
    account(app){
        //注册
        app.post('/register',async (req,res) =>{
            let username = req.body.username;
            let password = req.body.password;

            let nickname = '';
            let map = '';
            let minutemap = '';
            
            let result = await db.select('user',{username});
            
            if(result.status){
                res.send(apiResult(false));
                
            } else {
                let result = await db.insert('user',{username,password})
            
                res.send(result);
            }
        });
        //登录
        app.post('/login',async (req,res) =>{
            let username = req.body.username;
            let password = req.body.password;

            let result = await db.select('user',{username,password});

            // 如果用户存在则设置token
            if(result.status){

                let token = jwt.sign({username},'1234',{'expiresIn':60*60})

                res.send(apiResult(result.status,{token,username}));
            }else{
                res.send(result);
            }
        });
        //修改
        app.post('/update',async (req,res) =>{

            let username = req.body.username;

            let nickname = req.body.nickname;
            let map = req.body.map;
            let minutemap = req.body.minutemap;

            let result = await db.update('user',{username},{nickname,map,minutemap})

            res.send(apiResult(result.status,{nickname,minutemap}))
        })
    }
}