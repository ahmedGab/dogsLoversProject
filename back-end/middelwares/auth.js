const jwt = require('jsonwebtoken');


module.exports=function (req,res,next){
const token=req.cookies.token 
if(!token)
return res.send("error")
try {
   let decodeToken= jwt.verify(token,"privateKey")
    req.user=decodeToken
next()
}
catch(e){
    res.send("token wrong ")
}
}