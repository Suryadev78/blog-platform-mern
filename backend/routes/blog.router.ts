    import {Router} from "express";
    import Blog from "../models/blogShema.js";
    import authMiddleware from "../middleware/authMiddleware.js";
    import type { Request, Response } from "express";
    import User from "../models/userShema.js";
    const blogRouter = Router();

    blogRouter.post("/create",authMiddleware, async (req:Request,res:Response)=>{
        const {title,content} = req.body;
        const authorId = req.user?.userId;
        if(!title || !content || !authorId){
            return res.status(400).json({msg:"All fields are required"});
        }

        try{
            const user = await User.findById(authorId).select('Name');
            if(!user){
                return res.status(400).json({msg:"Invalid author"});
            }
            const blog = await Blog.create({
                title,
                content,
                author : authorId,
                authorName : (user as any).Name
            }) 
           return res.status(201).json({msg:"blog created successfully",blog});
        }
        catch(e :any){
            return res.status(500).json({msg:"Error creating blog", error : e.message})
        }
    })

    blogRouter.get("/getAll" , async(req:Request,res:Response)=>{
        try{
            const blogs = await Blog.find({});
            return res.status(200).json({msg:"blogs fethched succesfully", blogs});
        }
        catch(e:any){
            return res.status(500).json({msg:"Error getting blogs",error : e.message});
        }
    })


    export default blogRouter;