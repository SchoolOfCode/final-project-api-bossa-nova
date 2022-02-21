import Job from "../models/jobs.js";

export async function getJobByID(req, res, next) {
  let correctJob;

  try {
    correctJob = await Job.findById(req.params.id);
    if (!correctJob) {
      return res.status(404).json({ message: "job not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.job = correctJob;
  next();
}
