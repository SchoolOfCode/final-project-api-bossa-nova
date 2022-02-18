import express from "express";
import { getAllJobs, createJob } from "../utils/jobs.js";
import { getJobByID } from "../middleware/jobs.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await getAllJobs();
  res.json(jobs);
});

router.get("/:id", getJobByID, async (req, res) => {
  res.json(res.job);
});

router.post("/", async (req, res) => {
  try {
    const newJob = await createJob(req);
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getJobByID, async (req, res) => {
  if (req.body.jobTitle) {
    res.job.jobTitle = req.body.jobTitle;
  }
  if (req.body.company) {
    res.job.company = req.body.company;
  }
  if (req.body.jobStatus) {
    res.job.jobStatus = req.body.jobStatus;
  }
  if (req.body.minSalary) {
    res.job.minSalary = req.body.minSalary;
  }
  if (req.body.maxSalary) {
    res.job.maxSalary = req.body.maxSalary;
  }

  try {
    const updatedJob = await res.job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getJobByID, async (req, res) => {
  try {
    await res.job.remove();
    res.json({ message: "job deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
