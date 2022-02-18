import Job from "../models/jobs.js";

export async function getAllJobs() {
  return await Job.find();
}
