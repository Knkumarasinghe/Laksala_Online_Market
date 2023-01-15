const mongoose = require("mongoose")

const Schema= mongoose.Schema

const order_schema=new Schema({

    orderId:{
        type:String,
        required:true,
        trim:true
    },

    user_email:{
        type:String,
        required:true,
        trim:true
    },
    user_name:{
        type:String,
        required:true,
        trim:true
    },
    products:[
        {
            title:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                trim:true
            },
            category:{
                type:String,
                required:true,
                trim:true
            },
            imagePath:{
                type:String,
                required:true,
                trim:true
            },
            total_product_price:{
                type:Number,
                required:true
            }
        }
    ],
    user_address:{
        type:String,
        required:true,
        trim:true
    },
 
    total_price:{
        type:Number,
        required:true,
        trim:true
    },
    payment_status:{
        type:Boolean,
        required:false
    },
    date:{
        type:String,
        required:true,
        trim:true
    },
    time:{
        type:String,
        required:true,
        trim:true
    }
});

module.exports = {
    orders:mongoose.model("orders",order_schema)
}
