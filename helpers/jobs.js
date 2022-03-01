import User from "../models/users.js";

export async function getJobByID(user, jobID) {
  return user.jobs.filter((job) => String(job._id) === String(jobID));
}

export async function createJob(id, job) {
  const user = await User.findOne({ _id: id });
  user.jobs.push(job);
  const doc = await user.save();
  return doc;
}

export async function updateJob(updatedJob, userID, jobID) {
  const user = await User.findOne({ _id: userID });
  const jobsArray = user.jobs;
  const jobIndex = jobsArray.findIndex(
    (job) => String(job._id) === String(jobID)
  );
  user.jobs = [
    ...user.jobs.slice(0, jobIndex),
    updatedJob,
    ...user.jobs.slice(jobIndex + 1),
  ];
  const doc = await user.save();
  return doc;
}

export async function deleteJob(userID, jobID) {
  const user = await User.findOne({ _id: userID });
  const jobsArray = user.jobs;
  const jobIndex = jobsArray.findIndex(
    (job) => String(job._id) === String(jobID)
  );
  user.jobs = [
    ...user.jobs.slice(0, jobIndex),
    ...user.jobs.slice(jobIndex + 1),
  ];
  const doc = await user.save();
  return doc;
}
