import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  category: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.model("Resource", resourceSchema);
