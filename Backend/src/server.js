import { app } from "./app.js";
import dotenv from "dotenv"

dotenv.config({
  path: './.env' 
})  


app.get("/", (req,res) => {
  res.send("hello world ")
})

app.listen(process.env.PORT || 4000 , () => {
  console.log(`server is running on port : ${process.env.PORT}`);
})