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
  if (req.body.techStack) {
    job.techStack = req.body.techStack;
  }
  if (req.body.contact) {
    job.contact = req.body.contact;
  }
  if (req.body.dateAdded) {
    job.dateAdded = req.body.dateAdded;
  }
  if (req.body.applicationDeadline) {
    job.applicationDeadline = req.body.applicationDeadline;
  }
  if (req.body.interviewDate) {
    job.interviewDate = req.body.interviewDate;
  }
  if (req.body.offerDate) {
    job.offerDate = req.body.offerDate;
  }
  if (req.body.urlLinks) {
    job.urlLinks = req.body.urlLinks;
  }
  if (req.body.location) {
    job.location = req.body.location;
  }
  if (req.body.jobDescription) {
    job.jobDescription = req.body.jobDescription;
  }
  if (req.body.notes) {
    job.notes = req.body.notes;
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
  if (updates.techStack) {
    job.techStack = updates.techStack;
  }
  if (updates.contact) {
    job.contact = updates.contact;
  }
  if (updates.dateAdded) {
    job.dateAdded = updates.dateAdded;
  }
  if (updates.applicationDeadline) {
    job.applicationDeadline = updates.applicationDeadline;
  }
  if (updates.interviewDate) {
    job.interviewDate = updates.interviewDate;
  }
  if (updates.offerDate) {
    job.offerDate = updates.offerDate;
  }
  if (updates.urlLinks) {
    job.urlLinks = updates.urlLinks;
  }
  if (updates.location) {
    job.location = updates.location;
  }
  if (updates.jobDescription) {
    job.jobDescription = updates.jobDescription;
  }
  if (updates.notes) {
    job.notes = updates.notes;
  }
  return await job.save();
}

export async function deleteJob(job) {
  return await job.remove();
}
