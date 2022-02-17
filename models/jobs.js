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
  salary: {
    type: {
      minSalary: {
        type: Number,
      },
      maxSalary: {
        type: Number,
      },
    },
  },
});

export default mongoose.model("Job", jobSchema);
