import express,{ Router }  from "express";
import { registerUser } from "../controllers/usr.controller.js";

const router : express.Router =  Router();

router.route("/register").post(registerUser)


export default router;