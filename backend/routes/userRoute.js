import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"

// console.log(validater);


const userRouter = express.Router()

userRouter.post("/register",registerUser);
userRouter.post ("/login",loginUser)
export default userRouter;