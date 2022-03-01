import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
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
      required: true,
    },
    maxSalary: {
      type: Number,
      required: true,
    },
  },
  { strict: false }
);

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  jobs: [jobSchema],
});

export default mongoose.model("User", userSchema);
