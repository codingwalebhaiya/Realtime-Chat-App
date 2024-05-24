import mongoose from "mongoose";
import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});



connectDB() 
  .then(() => {
    app.on("error", (error) => {
      console.log("error:", error);
      throw error; 
    }); 

    app.listen(process.env.PORT || 4000, () => {
      console.log(`server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MondoDB connection failed !!!", err);
  });
