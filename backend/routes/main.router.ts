import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import userRouter from "../routes/user.router.js"
import blogRouter from "./blog.router.js";

const mainRouter  = Router();


mainRouter.use("/user",userRouter);
mainRouter.use("/blog",blogRouter);
// mainRouter.use("/blog",authMiddleware,blogRouter);


export default mainRouter;


