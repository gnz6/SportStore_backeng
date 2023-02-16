import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";


const registerUser = async( {body}: Request, res: Response)=>{
   try {
       const responseUser = await registerNewUser(body);
        return res.status(201).json({ok:true, data: responseUser})
    
   } catch (error) {
    console.log(error)
    // handleHttp()
   }
    
}

const logUser = async( {body}: Request, res: Response)=>{
    const {email, password} = body;
    const response = await loginUser({email, password});

    if(response === "INVALID_USER_OR_PASSWORD"){
        res.status(403).json({ok:false, data: response})
    }
    res.status(200).json({ok:true, data: response})
}


export {registerUser, logUser};