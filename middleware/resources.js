import Resource from "../models/resources.js";

export async function getResourceByID(req, res, next) {
  let correctResource;

  try {
    correctResource = await Resource.findById(req.params.id);
    if (!correctResource) {
      return res.status(404).json({ message: "resource not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.resource = correctResource;

  next();
}
