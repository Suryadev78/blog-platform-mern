import express from "express";
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ msg: "hey from backend" });
});
app.listen(3000, () => {
    msg: "server running on port 3000";
});
//# sourceMappingURL=index.js.map