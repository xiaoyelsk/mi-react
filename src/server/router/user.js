const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')

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

            if(result.status){
                res.send(result.status);
            } else {
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