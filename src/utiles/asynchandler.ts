import {Request,Response,NextFunction} from "express"
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

const asayncHandler = (requesHndler: { (req: Request, res: Response , next : NextFunction): Promise<void>;  })=>{
    return (req : Request,res : Response ,next : NextFunction)=>{
        Promise.resolve(requesHndler(req ,res,next)).catch(err =>{next(err);});
    } 
}

export {asayncHandler}