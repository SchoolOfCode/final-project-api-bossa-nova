import express from "express";
import Job from "../models/jobs.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.get("/:id", getJobByID, async (req, res) => {
  res.json(res.job);
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

// middleware function to select job by id

async function getJobByID(req, res, next) {
  let correctJob;

  try {
    correctJob = await Job.findById(req.params.id);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.job = correctJob;
  next();
}

export default router;
