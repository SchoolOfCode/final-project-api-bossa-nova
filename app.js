import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import mongoose from "mongoose";
import resourcesRouter from "./routes/resources.js";

const app = express();

mongoose.connect(
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL
);
export const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.use(cors());

app.use("/api/user", usersRouter);
app.use("/api/resources", resourcesRouter);

export default app;
