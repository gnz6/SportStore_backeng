import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models/Users";


export interface RequestExt extends Request{
  user?:  JwtPayload | {id:string}  
}


const isAdmin = async({user}: RequestExt, res: Response, next: NextFunction) => {

    const findUser = await UserModel.findById(user?.id)
    if(!findUser) return res.status(400).json({ok:false, data:  "USER_NOT_FOUND"});
    if( !findUser.isAdmin ) return res.status(400).json({ok:false, data:  "ADMIN_ONLY"});
    if( findUser.isAdmin ) next();
};


export default isAdmin ;