const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user_model=new Schema({
    user_type:{
        type:String,
        requried:true,
        trim:true
    },
    user_name:{
        type:String,
        required:true,
        trim:true
    },
    user_email:{
        type:String,
        required:true,
        trim:true
    },
    user_password:{
        type: String,
        required:true,
        trim:true
    }
    
  
})