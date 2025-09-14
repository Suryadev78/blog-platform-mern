import type { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
console.log("jwt secret from env : " , process.env.JWT_SECRET);
const JWT_SECRET = process.env.JWT_SECRET || ""  ;
if(!JWT_SECRET){
    throw new Error("JWT_SECRET is not set");
}

interface CustomJwtPayload{
    userId :string
}

declare global {
    namespace Express {
        interface Request{
            user? : CustomJwtPayload
        }
    }
}

const authMiddleware = (req : Request, res :Response, next:NextFunction) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({msg:"No token provided"});
    }
    if(!token.startsWith("Bearer ")){
        return res.status(401).json({msg:"Invalid token"});
    }
    const tokenData = token.split(" ")[1];
    if(!tokenData){
        return res.status(401).json({msg:"Invalid token"});
    }
    try{
        const decode = jwt.verify(tokenData, JWT_SECRET) as CustomJwtPayload;
        if(!decode.userId){
            return res.status(401).json({msg:"invalid token"});
        }
        req.user = decode;
        next();
    }
    catch(e:any){
        return res.status(401).json({msg: "Error verifying token", error:e.message});
    }
}

export default authMiddleware;