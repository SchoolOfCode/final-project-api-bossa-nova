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
  dateAdded: {
    type: Date,
  },
  applicationDeadline: {
    type: Date,
  },
  interviewDate: {
    type: Date,
  },
  offerDate: {
    type: Date,
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
