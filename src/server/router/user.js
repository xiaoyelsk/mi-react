const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectId;

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

                let token = jwt.sign({username},'1234',{'expiresIn':600*60})

                res.send(apiResult(result.status,{token,username}));
            }else{
                res.send(result);
            }
        });
        // 获取用户登陆状态
        app.post('/getStatus', filter,(req,res)=>{
            res.send(apiResult(true));
        })
        //获取所有用户
        app.get('/getUser', async (req,res) =>{

            let result = await db.select('user')

            res.send(result.data)
        })
        //插入/修改用户地址
        app.post('/addSite',async (req,res) =>{

            let username = req.body.username;

            let nickname = req.body.nickname || '';
            let phone = req.body.phone || '';
            let map = req.body.map || '';
            let minutemap = req.body.minutemap || '';
            let morenmap = req.body.morenmap || '';
            let type = req.body.state;
            let _id = req.body.id;

            if(type == 'alter'){

                let result = await db.update('userSite',{_id:new ObjectId(_id)},{nickname,phone,map,minutemap,morenmap})

                if(result.status){
                    res.send(apiResult(result.status))
                } else {
                    res.send(apiResult(false))
                }
            } else {
                let result = await db.insert('userSite',{username,nickname,phone,map,minutemap,morenmap})

                if(result.status){
                    res.send(apiResult(result.status))
                } else {
                    res.send(apiResult(false))
                }
            }

        });
        //获取用户地址
        app.post('/getSite',async (req,res) =>{
            let username = req.body.username;

            let _id = req.body.id || '';

            if(_id !== ''){
                let result = await db.select('userSite',{_id:new ObjectId(_id)})

                if(result.status){
                    res.send(result);
                } else {
                    res.send(apiResult(false));
                }
            } else {
                let result = await db.select('userSite',{username})

                res.send(result)
            }
            
        });
        //删除用户地址
        app.post('/delSite',async (req,res) =>{

            let minutemap = req.body.minutemap;

            let result = await db.delete('userSite',{minutemap});

            res.send(result.status);
        })

    }
}