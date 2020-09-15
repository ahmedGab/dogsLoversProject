const mongoose=require('mongoose');

  

const Reclamation = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
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
   subject:{
       type:String,
       required:true
   },
   message:{
    type:String,
    required:true

},

   
   })

module.exports = mongoose.model("reclamation", Reclamation )