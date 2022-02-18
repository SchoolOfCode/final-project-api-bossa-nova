import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  userID: {
    type: Number,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  jobStatus: {
    type: String,
    required: true,
  },
  minSalary: {
    type: Number,
  },
  maxSalary: {
    type: Number,
  },
  techStack: {
    type: String,
  },
  contact: {
    type: String,
  },
  dataAdded: {
    type: String,
  },
  applicationDeadline: {
    type: String,
  },
  interviewDate: {
    type: String,
  },
  offerDate: {
    type: String,
  },
  urlLinks: {
    type: String,
  },
  location: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  notes: {
    type: String,
  },
});

export default mongoose.model("Job", jobSchema);
