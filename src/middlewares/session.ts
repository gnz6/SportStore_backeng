import { Request, Response, NextFunction } from "express";
import jwtHandle from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userToken = req.headers.authorization || "";
    const jwt  = userToken?.split(" ").pop();
    const isValid = jwtHandle.verifyToken(`${jwt}`)
    if(!isValid) return res.status(401).json({ok:false, data:"INVALID_TOKEN"})
    
    next();

  } catch (error) {
    console.log(error)
    res.status(400).json({ok:false, data: "INVALID_CREDENTIALS"})
  }
};


export default checkJwt ;