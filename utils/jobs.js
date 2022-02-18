import Job from "../models/jobs.js";

export async function getAllJobs() {
  return await Job.find();
}

export async function createJob(req) {
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

  return await job.save();
}

export async function updateJob(updates, job) {
  if (updates.jobTitle) {
    job.jobTitle = updates.jobTitle;
  }
  if (updates.company) {
    job.company = updates.company;
  }
  if (updates.jobStatus) {
    job.jobStatus = updates.jobStatus;
  }
  if (updates.minSalary) {
    job.minSalary = updates.minSalary;
  }
  if (updates.maxSalary) {
    job.maxSalary = updates.maxSalary;
  }
  return await job.save();
}

export async function deleteJob(job) {
  return await job.remove();
}
