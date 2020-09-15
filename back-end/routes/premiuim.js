const express=require('express');
const router= express.Router()
mongoose=require("mongoose")
const _=require('lodash')

const Premiuim =require('../model/premiuim')

router.get('/' ,async (req,res)=>{
    let prem=await Premiuim.find()
      
                res.json(prem)
               
    
           
        })




router.post('/' ,async (req,res)=>{
  
try{
           
     prem=new Premiuim(_.pick(req.body,['idUser','date','name','lastname','email','tel','password','role','state']))
     await prem.save();

     res.send("ok")
}
catch(e){
    res.send(e)
}
})

router.put('/:id',async(req,res)=>{


    try {
        //const joiError=schema.validate(req.body)
      
    
            let prem = await Premiuim.findById(req.params.id);
            if (!prem)
              return res.send("no user");


            prem = await Premiuim.findByIdAndUpdate(req.params.id, req.body, {
              new: true
            });
            res.send(prem)
          } catch (error) {
            res.send("error");
          }
        
    
    })


router.delete('/:id' ,async(req,res)=>{
    let deletedCount=await Premiuim.findByIdAndRemove(req.params.id)
      
            res.send(deletedCount)
       
    })


module.exports = router
