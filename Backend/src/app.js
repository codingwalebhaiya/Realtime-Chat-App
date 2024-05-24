import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


// route import 
import authRouters from "../src/routes/auth.routes.js"

// routes declaration 
app.use("/api/auth", authRouters)

export {app}