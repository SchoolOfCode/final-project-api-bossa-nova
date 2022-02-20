import express from "express";
import { createResource, getAllResources } from "../utils/resources.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const resources = await getAllResources();
  res.json(resources);
});

router.post("/", async (req, res) => {
  try {
    const newResource = await createResource(req);
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
