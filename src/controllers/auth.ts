import { Request, Response } from "express";
import { registerNewUser } from "../services/auth.service";


const registerUser = async( {body}: Request, res: Response)=>{
    // const responseUser = await registerNewUser();
    
}

const logUser = async( req: Request, res: Response)=>{}


export {registerUser, logUser};