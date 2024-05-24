import mongoose from "mongoose";
import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: './.env' 
})  


app.get("/", (req,res) => {
  res.send("hello world ")
})

connectDB()


app.listen(process.env.PORT || 4000 , () => {
  console.log(`server is running on port : ${process.env.PORT}`);
})