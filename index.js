const express = require("express");
const productRouter = require("./routes/productRouter.js"); 
require("./db.js");
const app = express();
const cors = require("cors");
const PORT = 3001;
app.use(cors({origin:"https://small-store-client.vercel.app/"}));
app.use(express.json());
app.use("/product", productRouter);

app.get("/" , (req,res)=>{
    res.status(200).json({"message":"Your Server Is Up And Running🚀"})
})
const server = app.listen(PORT,()=>{
    console.log("App Listening on Port 3001")
})
