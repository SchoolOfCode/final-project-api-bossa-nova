import dotenv from "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = process.env.PORT || 8000;
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
