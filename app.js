import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import resourcesRouter from "./routes/resources.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/user", usersRouter);
app.use("/api/resources", resourcesRouter);

export default app;
