import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// routes

app.use("/", (req, res) => {
    res.send("Hello World. You've reached the PlanIt API.");
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((err) => console.log(err.message));
