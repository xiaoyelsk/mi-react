const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')

module.exports = {
    edit(app){
        //插入商品
        app.post('/addProduct',(req,res) =>{

        });
        //获取商品
        app.post('/getProduct',async (req,res) =>{

            if(req.body.id){
                let product_id = req.body.id;

                product_id = Number(product_id);

                let result = await db.select('goodslist',{product_id});

                res.send(result)

            } else {

                let result = await db.select('goodslist');

                res.send(result);
            }

            
        });
        //删除商品
        app.post('/delProduct',async (req,res) =>{
            let id = req.body.id;
            id = Number(id);

            let result = await db.delete('goodslist',{id});

            res.send(result);
        });

        //修改商品
        app.post('/upProduct',async (req,res) =>{
            let id = Number(req.body.id);

        });
        //添加商品加入购物车
        app.post('/addProductCar',async (req,res) =>{

            let username = req.body.username;

            let product_id = req.body.product_id;
            let img_url = req.body.img_url;
            let product_name = req.body.product_name;
            let product_brief = req.body.product_brief;
            let product_org_price = req.body.product_org_price;
            let product_price = req.body.product_price;
            let product_qty = req.body.product_qty;

            let result = await db.insert('ProductCar',{username,product_id,img_url,product_name,product_brief,product_org_price,product_price,product_qty})

            if(result.status){
                res.send(result.status)
            } else {
                res.send(apiResult(false,result))
            }

        });

        // 商品模糊查询
        app.post('/searchProduct',async (req,res)=>{

            // 获取关键字
            const keyword  = req.body.keyword;console.log(keyword)
            const reg = new RegExp(keyword,'i');
            // 调用数据库模块
            let result = await db.search('goodslist',reg);
            res.send(result);
        })
    }
}