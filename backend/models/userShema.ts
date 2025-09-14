import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Path `email` is required"],
        trim: true,
        lowercase: true,
        minLength: 4,
        maxLength: 25
    },
    password: {
        type: String,
        minLength: 4,
        maxLength: 100
    }
});

const User = mongoose.model("User", userShema);
export default User;


