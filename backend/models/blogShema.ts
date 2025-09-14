import mongoose from "mongoose";



const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
        minlength : [5,"Title must be at least 3 characters long"],
        maxlength : [50,"Title must be less than 50 characters long"],
    },
    content:{
        type:String,
        required : true,
        minlegnth : [10,"Content must be at least 10 characters long"],
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    authorName:{
        type:String,
        minLength : 3,
        maxLength : 25
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Blog = mongoose.model("Blog",blogSchema);

export default Blog;