const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')

module.exports = {
    edit(app){
        //插入商  品
        app.post('/addproduct',(req,res) =>{

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

            let p_id = Number(req.body.p_id);
            let img = req.body.img;
            let p_name = req.body.p_name;
            let p_price = req.body.p_price;
            let p_qty = req.body.qty;

            let result_id = await db.select('ProductCar',{p_id});

            if(result_id.status){

                let qty = result_id.data[0].qty;

                qty = Number(p_qty) + Number(qty);

                let resultcar = await db.update('ProductCar',{p_id},{qty});

                res.send(resultcar.status);
            }else{

                let result = await db.insert('ProductCar',{username,p_id,img,p_name,p_price,qty:p_qty})

                    if(result.status){
                        res.send(result.status)
                    } else {
                        res.send(apiResult(false,result))
                    }
            }


        });

        // 商品模糊查询
        app.post('/searchProduct',async (req,res)=>{

            // 获取关键字
            let keyword  = req.body.keyword;
            console.log(keyword);
            let reg = new RegExp(keyword,'i');
            // 调用数据库模块
            let result = await db.search('goodslist',reg);
            res.send(result);
        })
    }
}