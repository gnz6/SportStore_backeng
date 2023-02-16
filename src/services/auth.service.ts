import { Auth } from "../interfaces/auth.interface"
import { UserModel } from "../models/Users"
import { User } from '../interfaces/user.interface';
import { comparePassword, encrypt } from "../utils/bcrypt.handle";
import jwtHandle from "../utils/jwt.handle";


const registerNewUser = async({email, password, name, description}:User)=>{
    try {
        const isRegistered = await UserModel.findOne({email})
        if(isRegistered) return "ALREADY_REGISTERED";
        const hashedPass = await encrypt(password);
        const newUser = await UserModel.create({email, password:hashedPass, name, description})
        const data = {email, name}
        return data
    } catch (error) {
        console.log(error);        
    }

}
const loginUser = async({email, password}: Auth)=>{
    const isRegistered = await UserModel.findOne({email})
    if(!isRegistered) return "USER_NOT_FOUNT";

    const hashedPassword = isRegistered.password;
    const isCorrect = await comparePassword(password, hashedPassword)
    if(!isCorrect) return "INVALID_USER_OR_PASSWORD";
    const token =await jwtHandle.createToken(isRegistered.id);
    console.log(token)
    const { name } = isRegistered
    const data = {token : token, user: {name, email}}
    return data;
}


export {registerNewUser, loginUser}