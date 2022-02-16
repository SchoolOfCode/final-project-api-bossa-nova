import { config } from "dotenv";
import { executeJobsCrudOperations } from "./jobsCrud.js";

config();
console.log(process.env.DB_URI);
await executeJobsCrudOperations();
