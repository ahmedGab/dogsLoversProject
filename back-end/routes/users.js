const express=require('express');
const router= express.Router()
mongoose=require("mongoose")
const  User =require('../model/user')
const _=require('lodash')
const auth=require('../middelwares/auth')
const Joi=require("joi")
const schema = Joi.object({

                
    name:Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    lastname:Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),  
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
   password:Joi.string()
   .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
   role:Joi.string().min(4).max(8),
   tel:Joi.string().min(8).max(8),
   lieu:Joi.string().min(4),
   typeDressage:Joi.string(),
   photo:Joi.string()


})

router.get('/profil',auth,async(req,res)=>{
  let profil=await User.findById(req.user._id).select('-password')
  res.send(profil)
})
router.get('/' ,async (req,res)=>{
    let user=await User.find()
      
                res.json(user)
               
    
           
        })
    

        router.post('/' ,async (req,res)=>{
          
        try{
            const joiError=schema.validate(req.body)
                   
          
            let user= await User.findOne({email:req.body.email})
            if( user ){
           return res.status(404).send("Cet email existe")
            }
           
              
              
             user=new User(_.pick(req.body,['name','lastname','email','password','role','tel','lat','lon','ecole','region','fb','youtube','video','desc','photo']))
             await user.save();
             let token=  user.generateTokens()

             res.cookie('token',token ,{expires: new Date(Date.now() + 9000000),httpOnly: true
            }).send(_.pick(user,['name','lastname','email','role']))
            
             


        }
        catch(e){
            res.send("error")
        }

           
        })
        router.put('/:id',async(req,res)=>{


            try {
                const joiError=schema.validate(req.body)
              
            
                    let user = await User.findById(req.params.id);
                    if (!user)
                      return res.send("no user");


                    user = await User.findByIdAndUpdate(req.params.id, req.body, {
                      new: true
                    });
                    res.send(user)
                  } catch (error) {
                    res.send("error");
                  }
                
            
            })

            router.get('/:id' ,async (req,res)=>{

              try {
                      let user=await User.findById(req.params.id)
      
                      res.send(user)
      
              } catch (error) {
                      res.send("user not found")
              }
      })
      router.delete('/:id' ,async(req,res)=>{
        let deletedUser=await User.findByIdAndRemove(req.params.id)
          
                res.send(deletedUser)
           
        })


        module.exports = router
