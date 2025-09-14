import { Router } from "express";
import type { Response, Request } from "express";
import User from "../models/userShema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "";

router.post("/signup", async (req: Request, res: Response) => {
    const { Name, email, password } = req.body;
    
    if (!Name || !email || !password) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    const passwordString = String(password);
    
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(passwordString, saltRounds);
        
        const user = await User.create({
            Name,
            email,
            password: hashedPassword
        });
        
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "24h" });
        
        return res.status(201).json({
            msg: "User created successfully",
            user: {
                _id: user._id,
                Name: user.Name,
                email: user.email
            },
            token
        });
    } catch (e: any) {
        console.log(e);
        return res.status(500).json({ msg: "Error creating user", error: e.message });
    }
})


router.post("/login", async (req:Request,res:Response)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({msg:"All fields are required"});
    }
    const passwordString = String(password);
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({msg:"User not found"});
        }
        if(!user.password){
            return res.status(400).json({msg:" Invalid user data"})
        }
        const isPasswordValid =  await bcrypt.compare(passwordString,user.password);
        if(!isPasswordValid){
            return res.status(401).json({msg:"Invalid password"});
        }

        const token = jwt.sign({userId : user._id},JWT_SECRET,{expiresIn:"24h"});
        return res.status(200).json({msg:"Login successful", user:{
            _id : user._id,
            Name:user.Name,
            email:user.email
        },token})

    }
    catch(e:any){
        return res.status(500).json({msg:"error logging in", error :e.message});
    }
})



export default router;


