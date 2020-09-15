const mongoose=require('mongoose');

  

const CardPremiuim = new mongoose.Schema({
  
    title:{
        type:String,
        required:true

    },
    subtitle:{
        type:String,
        required:true

    }
   ,

    photo:{
        type:String,
        required:true
    },
    time:{
        type:String,

    }
    ,
    prix:{
        type:String,
    },
    desc:{
        type:String,
       }
,idUser:{
    type:String
}
   
   })

module.exports = mongoose.model("CardPremiuim", CardPremiuim )