const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    
})
const Product = new mongoose.model("Product" , ProductSchema);
module.exports = Product;