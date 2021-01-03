let express = require('express');
let router = express.Router();

let findList = require('../../utils/mgdb').findList;
router.get('/',(req,res,next)=>{
  let {listname} = req.query;//获取动态集合名
  //整理查询参数
  let {_page,_limit,_sort,q} = req.query
  //查询
  findList({dbName:'newsapp',collectionName:listname,_page,_limit,_sort,q}).then(
    result=>res.send(result)  
  ).catch(
    err=>res.send(err)
  )
});

module.exports=router;