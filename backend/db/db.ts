import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const mongoUri = process.env.MONGO_URI as string;
        if (!mongoUri) {
            throw new Error("MONGO url not defined in .env")
        }
        await mongoose.connect(mongoUri);
        console.log("Connected to Db")
    }
    catch (e) {
        console.log("Connection to DB failed", e);
    }
}

export default connectDb;


