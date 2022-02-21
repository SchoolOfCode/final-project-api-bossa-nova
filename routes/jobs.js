import express from "express";
import { getAllJobs, createJob, updateJob, deleteJob } from "../utils/jobs.js";
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
  try {
    const updatedJob = await updateJob(req.body, res.job);
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getJobByID, async (req, res) => {
  try {
    await deleteJob(res.job);
    res.json({ message: "job deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
