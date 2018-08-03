
var list=require("./city.js")
// var addlist=require('/provinceCity.js');
// 接口的开放
module.exports=function(app){
    app.get("/api/data",function(req,res,next){
        res.send(list)
    })  

    // app.get("/api/datat",function(req,res,next){
    //     res.send(addlist)
    // })
}