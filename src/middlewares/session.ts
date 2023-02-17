import { Request, Response, NextFunction } from "express";
import jwtHandle from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request{
  user?:  JwtPayload | {id:string}  
}

const checkJwt = async(req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const userToken = req.headers.authorization || "";
    const jwt  = userToken?.split(" ").pop();
    const isValid = await jwtHandle.verifyToken(`${jwt}`) as {id:string}
    if(!isValid) return res.status(401).json({ok:false, data:"INVALID_TOKEN"})
    req.user  = isValid;
    next();

  } catch (error) {
    console.log(error)
    res.status(400).json({ok:false, data: "INVALID_CREDENTIALS"})
  }
};


export default checkJwt ;