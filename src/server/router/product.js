const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')

module.exports = {
    edit(app){
        //插入商  品
        app.post('/addproduct',(req,res) =>{

        });
        //获取商品
        app.get('/getproduct',async (req,res) =>{
            let result = await db.select('goodslist');
            res.send(result);
        });
    }
}