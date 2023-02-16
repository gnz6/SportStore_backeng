import { sign, verify } from "jsonwebtoken";
const SECRET = process.env.SECRET;

const createToken = async (id: string) => {
  const jwt = sign({id}, SECRET!, { expiresIn: "2 days" });
  return jwt;
};

const verifyToken = async (jwt: string) => {
    try {
        const isOk = verify(jwt, SECRET!);
        return isOk;
        
    } catch (error) {
        console.log(error, "verifyToken")
        return "Invalid Credentials"

    }
};

export = { createToken, verifyToken };
