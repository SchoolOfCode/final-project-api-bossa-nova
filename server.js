import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8000;

const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.use(cors());

app.use("/api/user", usersRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
