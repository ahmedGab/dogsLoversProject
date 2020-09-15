const mongoose=require('mongoose');

  

const Premiuim = new mongoose.Schema({
  idUser:{
    type:String,
    required:true
  },
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
   },

    email:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
      

    }
    ,
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true 
    }
    ,state:{
        type:String,
        require:true
    }

   
   })

module.exports = mongoose.model("premiuim", Premiuim )