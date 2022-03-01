import express from "express";
import { createResource, getAllResources } from "../helpers/resources.js";
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

export default router;
