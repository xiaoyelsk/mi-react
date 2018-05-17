const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')

module.exports = {
    edit(app){
        //插入商品
        app.post('/addProduct',(req,res) =>{

        });
        //获取全部商品
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
        //获取Car商品
        app.post('/getProductCar', async (req,res) =>{

            let username = req.body.username;

            let result = await db.select('ProductCar',{username});

            res.send(result);
        })
        //删除商品
        app.post('/delProduct',async (req,res) =>{
            let p_id = req.body.id;
            p_id = Number(p_id);

            let result = await db.delete('ProductCar',{p_id});

            res.send(result);
        });
        //修改商品
        app.post('/upProduct',async (req,res) =>{

            let product_id = req.body.product_id;
            let img_url = req.body.img_url;
            let product_brief = req.body.product_brief;
            let product_name = req.body.product_name;
            let product_price = req.body.product_price;
            let type_text = req.body.type_text;

            let result = await db.update('goodslist',{product_id},{img_url,product_brief,product_name,product_price,type_text})

            res.send(result.status);
        })

        //修改商品qty
        app.post('/upProductqty',async (req,res) =>{

            let username = req.body.username;

            let p_id = Number(req.body.id);

            let isSelected = req.body.ischecked;

            console.log(typeof isSelected);

            let type = req.body.type || '';
            
            let resultuser = await db.select('ProductCar',{username})

            let qty;

            if(resultuser.status){

                resultuser.data.map(async (item) =>{
              
                    if(item.p_id == p_id){

                        if(type == "+"){
                            qty = Number(item.qty) + 1;

                            let result = await db.update('ProductCar',{p_id},{qty})
                            res.send(result.status);

                        } else if(type == "-"){
                            qty = Number(item.qty) - 1;

                            let result = await db.update('ProductCar',{p_id},{qty})
                            res.send(result.status);

                        } else if(typeof isSelected == "string"){

                           let result = await db.update('ProductCar',{p_id},{isSelected})
                            
                            res.send(result.status);

                        }
                        
                    }
                })
                
            } else {

                res.send(false);
            }

        });
        //添加商品加入购物车
        app.post('/addProductCar',async (req,res) =>{

            let username = req.body.username;

            let p_id = Number(req.body.p_id);
            let img = req.body.img;
            let p_name = req.body.p_name;
            let p_price = req.body.p_price;
            let p_qty = req.body.qty;
            let isSelected = req.body.isSelected;

            let result_id = await db.select('ProductCar',{p_id});

            if(result_id.status){

                let qty = result_id.data[0].qty;

                qty = Number(p_qty) + Number(qty);

                let resultcar = await db.update('ProductCar',{p_id},{qty});

                res.send(resultcar.status);
            }else{

                let result = await db.insert('ProductCar',{username,p_id,img,p_name,p_price,qty:p_qty,isSelected})

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
           
            let reg = new RegExp(keyword,'i');
            // 调用数据库模块
            let result = await db.search('goodslist',reg);
            res.send(result);
        })
    }
}