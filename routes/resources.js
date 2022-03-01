import express from "express";
import {
  createResource,
  getAllResources,
  getResourcesByID,
  updateResource,
} from "../helpers/resources.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const payload = await getAllResources();
  res.status(200).json({ success: true, payload: payload });
});

router.post("/", async (req, res) => {
  try {
    const payload = await createResource(req.body);
    res.status(201).json({ success: true, payload: payload });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const [resource] = await getResourcesByID(id);

  if (resource) {
    try {
      const payload = await updateResource(id, updates);
      res.status(200).json({ success: true, payload: payload });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  } else {
    res
      .status(404)
      .json({ success: false, message: `No resource found with id ${id}` });
  }
});

export default router;
