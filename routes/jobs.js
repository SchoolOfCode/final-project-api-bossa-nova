import express from "express";
import Job from "../models/jobs.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

export default router;
