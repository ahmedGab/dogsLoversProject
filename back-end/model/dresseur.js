const mongoose=require('mongoose');

  

const Users = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },  email: {
       type:String,
        required:true
   },
   password:{
       type:String,
       required:true
   },
   role:{
    type:String,
required:true,
enum:['visiteur','dresseur']   
},
tel:{
    type:String
},
lat:{
    type:Number
},
lon:{
    type:Number
},
ecole:{
    type:String
}

,typeDressage:{
    type:String
},
photo:{
type:String
}
   
   
   })

module.exports = mongoose.model("users", Users )