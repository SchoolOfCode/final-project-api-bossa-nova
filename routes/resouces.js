import express from "express";
import {
  createResource,
  getAllResources,
  updateResource,
  deleteResource,
} from "../utils/resources.js";
import { getResourceByID } from "../middleware/resources.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const resources = await getAllResources();
  res.json(resources);
});

router.get("/:id", getResourceByID, async (req, res) => {
  res.json(res.resource);
});

router.post("/", async (req, res) => {
  try {
    const newResource = await createResource(req);
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getResourceByID, async (req, res) => {
  try {
    const updatedResource = await updateResource(req.body, res.resource);
    res.json(updatedResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getResourceByID, async (req, res) => {
  try {
    await deleteResource(res.resource);
    res.json({ message: "resource deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
