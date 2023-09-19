const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose
  .connect(
    process.env.MONGODB_LINK
  )
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((err) => console.log(err));