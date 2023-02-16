import { compare, genSalt, hash } from "bcrypt"

const encrypt =async(password: string) =>{
    try {
        const hashedPassword = await hash(password, 10);
        return hashedPassword    
    } catch (error) {
        console.log(error)
    }
}


const comparePassword = async(password: string, passHash:string) =>{
    const isCorrect = await compare(password, passHash);
    return isCorrect
}


export {encrypt, comparePassword}