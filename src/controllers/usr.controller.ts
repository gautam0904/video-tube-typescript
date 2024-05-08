import {asayncHandler} from "../utiles/asynchandler.js"
import {Request,Response} from "express"

const registerUser = asayncHandler( async (req : Request,res :Response)=>{
    res.status(200).json({
        "message":"ok"
    })
})

export {registerUser}