import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router() 

// register 

router.route("/register").post(registerUser)

//Login
router.route("/login")

// logout 
router.route("/logout")


export default router;