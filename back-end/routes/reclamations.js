const express=require('express');
const router= express.Router()
mongoose=require("mongoose")
const _=require('lodash')

const  Rec =require('../model/reclamation')



router.get('/' ,async (req,res)=>{
    let rec=await Rec.find()
      
                res.json(rec)
               
    
           
        })



router.post('/' ,async (req,res)=>{
  
try{
           
     rec=new Rec(_.pick(req.body,['date','name','lastname','email','subject','message']))
     await rec.save();

     res.send("le message est bien reçu")
}
catch(e){
    res.send("error")
}
})

router.delete('/:id' ,async(req,res)=>{
    let deletedRec=await Rec.findByIdAndRemove(req.params.id)
      
            res.send(deletedRec)
       
    })


module.exports = router
