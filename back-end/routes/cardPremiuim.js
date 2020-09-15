const express=require('express');
const router= express.Router()
mongoose=require("mongoose")
const _=require('lodash')

const CardPremiuim =require('../model/cardPremiuim')

router.get('/' ,async (req,res)=>{
    let card=await CardPremiuim.find()
      
                res.json(card)
               
    
           
        })




router.post('/' ,async (req,res)=>{
  
try{
           
     card=new CardPremiuim(_.pick(req.body,['title','subtitle','photo','time','prix','desc','idUser']))
     await card.save();

     res.send("ok")
}
catch(e){
    res.send(e)
}
})

router.put('/:id',async(req,res)=>{


    try {
        //const joiError=schema.validate(req.body)
      
    
            let card = await CardPremiuim.findById(req.params.id);
            if (!card)
              return res.send("no user");


            card = await CardPremiuim.findByIdAndUpdate(req.params.id, req.body, {
              new: true
            });
            res.send(card)
          } catch (error) {
            res.send("error");
          }
        
    
    })


router.delete('/:id' ,async(req,res)=>{
    let deletedCount=await Premiuim.findByIdAndRemove(req.params.id)
      
            res.send(deletedCount)
       
    })


module.exports = router
