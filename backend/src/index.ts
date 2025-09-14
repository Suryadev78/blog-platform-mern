import dotenv from "dotenv";
dotenv.config();
const startServer = async () => {
    // Dynamic imports to ensure they happen after dotenv.config()
    const express = (await import("express")).default;
    const cors = (await import("cors")).default;
    const connectDb = (await import("../db/db.js")).default;
    const mainRouter = (await import("../routes/main.router.js")).default;

    await connectDb();

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use("/api/v1", mainRouter);

    app.post('/auth', (req, res) => {
        const { firstName, lastName, userName, password } = req.body;
        res.json({
            firstName,
            lastName,
            userName,
            password
        });
    });

    app.listen(3000, () => {
        console.log("server running on 3000");
    });
};
startServer().catch(console.error);