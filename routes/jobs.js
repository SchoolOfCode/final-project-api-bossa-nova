import express from "express";
import Job from "../models/jobs.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.post("/", async (req, res) => {
  const job = new Job({
    userID: req.body.userID,
    jobTitle: req.body.jobTitle,
    company: req.body.company,
    jobStatus: req.body.jobStatus,
  });

  if (req.body.minSalary) {
    job.minSalary = req.body.minSalary;
  }

  if (req.body.maxSalary) {
    job.maxSalary = req.body.maxSalary;
  }

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
