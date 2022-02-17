import dotenv from "dotenv/config";
import express from "express";

import cors from "cors";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
