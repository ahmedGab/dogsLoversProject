const express=require('express');
const router= express.Router()
const  Users =require('../model/user')
const _=require('lodash')
mongoose=require("mongoose")



router.post('/' ,async (req,res)=>{
    let user= await Users.findOne({email:req.body.email})
   if( !user ){
  return res.send("email ou password sont incorrects")
   }

     
const checkPassword= req.body.password===user.password?true:false
  if( !checkPassword){
    return res.send("email ou password sont incorrects")
  
  }
try{
  let token=  user.generateTokens()
  res.cookie('token',token ,{expires: new Date(Date.now() + 900000000),httpOnly: true
 }).send(_.pick(user,['name','lastname','email','role']))

 



}
catch(e){
  console.log(e)}

  
 

})


module.exports = router