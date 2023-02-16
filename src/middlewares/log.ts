import { NextFunction, Request, Response } from "express";

 const logMiddleWare = (req : Request, res : Response, next : NextFunction) =>{
    const  header = req.headers;
    // const userAgent = header["user-agent"]; <= para sacar el navegador del usuario

    next();
}

export { logMiddleWare}