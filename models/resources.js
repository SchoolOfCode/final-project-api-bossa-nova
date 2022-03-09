import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  category: [String],
});

resourceSchema.path("link").validate((val) => {
  const urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");

export default mongoose.model("Resource", resourceSchema);
