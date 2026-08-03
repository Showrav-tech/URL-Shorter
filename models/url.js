const mongoose= require('mongose');

const urlSchema=new mongoose.Schema(
    {
   shortId:{
    type :String,
    reqired:true,
    unique:true,
   },
   redirectURL:{
    type:String,
    required:true,
   },
   visitHistory:[{timestamp:{type:Number}}],


    },
    {timestamps :true}
);

const URl=mongoose.model("url",urlSchema);
module.exports=URL;