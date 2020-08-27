const mongoose=require('mongoose');
const jwt=require("jsonwebtoken");

  

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
},typeDressage:{
    type:String
},
photo:{
type:String
}
   
   
   })
Users.methods.generateTokens=function(){

    const token=jwt.sign({_id:this._id,role:this.role},"privateKey")
     return token

}
module.exports = mongoose.model("users", Users )