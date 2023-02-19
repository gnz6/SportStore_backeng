import { Auth } from "../interfaces/auth.interface"
import { UserModel } from "../models/Users"
import { User } from '../interfaces/user.interface';
import { comparePassword, encrypt } from "../utils/bcrypt.handle";
import jwtHandle from "../utils/jwt.handle";


const registerNewUser = async({email, password, name, description, isAdmin, favourites = []}:User)=>{
    try {
        const isRegistered = await UserModel.findOne({email})
        if(isRegistered) return "ALREADY_REGISTERED";
        const hashedPass = await encrypt(password);
        const newUser = await UserModel.create({email, password:hashedPass,isAdmin ,favourites, name, description})
        const data = {email, name, isAdmin}
        return data
    } catch (error) {
        console.log(error);        
    }

}
const loginUser = async({email, password}: Auth)=>{
    const isRegistered = await UserModel.findOne({email})
    try {
        if(!isRegistered) return "USER_NOT_FOUNT";
    
        const hashedPassword = isRegistered.password;
        const isCorrect = await comparePassword(password, hashedPassword)
        if(!isCorrect) return "INVALID_USER_OR_PASSWORD";
        const token =await jwtHandle.createToken(isRegistered.id);
        // console.log(token)
        const { name, favourites } = isRegistered
        const data = {token : token, user: {name, email, favourites}}
        return data;
        
    } catch (error) {
        console.log(error);
        return "INVALID_USER_OR_PASSWORD";   
    }
}

const getUsersService = async(id?:string) =>{
    if(!id){
        const allUsers = await UserModel.find({})
        return allUsers
    }
    const findUser = await UserModel.findById(id)
    return findUser
}


export {registerNewUser, loginUser, getUsersService}