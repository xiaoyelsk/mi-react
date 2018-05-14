const apiResult = require('./apiResult.js')
const mc = require('mongodb').MongoClient;

let db = null;

mc.connect('mongodb://localhost:27017',(error,client) =>{
    if(error){
        return apiResult(false,error,'mogondb connect fail');
    } else {
        db = client.db('react');
    }
});


module.exports = {

    //增加
    async insert(_collection,_data){
        try{
            let result = await db.collection(_collection).insert(_data); 
            console.log(result);
            return apiResult(result.insertedCount > 0,result.result)
        } catch(error) {
            return apiResult(false,error);
        }

    },
    //查询
    async select(_collection,_condition = {}){
        try{
            let items = await db.collection(_collection).find(_condition).toArray();
            console.log(items)
            return apiResult(items.length > 0,items)
        } catch(error) {
            return apiResult(false,error);
        }
    }
}