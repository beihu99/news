let express = require('express');
let mgdb = require('../../utils/mgdb');
let router = express.Router();

router.get("/",(req,res,next)=>{
	let {collectionName} = req.query;
	
	mgdb.open({collectionName}).then(({collection,client})=>{
		collection.find().toArray((err,result)=>{
			if(err){
			  res.send({err:1,msg:'user集合操作失败'})
			}else{
				res.send(result)
				client.close()
			}
		})
	}).catch(err=>res.send({err:1,msg:'链接失败'}))
})


		
module.exports = router;