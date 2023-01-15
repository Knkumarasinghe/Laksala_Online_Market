const mongoose = require("mongoose")
const Schema = mongoose.Schema

const products_schema = new Schema({

    category:{
        type:String,
        required:true,
        trim:true
    },

    title: {
        type: String,
        
        required: true,
        trim:true
    },

    product_description: {
        type: String,
        required: true,
        trim:true
    },

    imagePath: {
        type: String,
        required: true,
        trim:true
    },
  
    price: {
        type: Number,
        required: true
    },
    price_description: {
        type: String,
        trim:true,
        default:""
    },
    
   
    is_deleted:{
        type:Boolean,
        required:true,
        default:false
    }
    

})

module.exports = {
    product:mongoose.model("product", products_schema)
}
