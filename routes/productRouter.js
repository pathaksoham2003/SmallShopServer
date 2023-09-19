const express = require("express");
const Product = require("../models/ProductModel.js");
const productRouter = express.Router();

productRouter.get("/all", async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(402).json(err);
  }
});

productRouter.post("/create", async (req, res) => {
    try{
        const response = await new Product(req.body);
        const data = await response.save();
        res.status(200).json(data);
    }catch(err){
        res.status(402).json(err);
    }
});

productRouter.patch("/update/:id" , async(req,res)=>{
    try{
        const {id} = req.params;
        const {name,description,price} = req.body;
        const response = await Product.findByIdAndUpdate(id,{name,description,price});
        res.status(200).json(response);
    }catch(err){
        res.status(422).json(err);
    }
})

productRouter.delete("/delete/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const response = await Product.findByIdAndDelete(id);
        res.status(200).json(response);
    }catch(err){
        res.status(422).json(err);
    }
})
module.exports = productRouter;