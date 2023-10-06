import express from "express";
import { Summary } from "./models/summaryModel";

const router = express.Router();

router.get("/summaries", async (req, res) => {
  try {
    const summaries = await Summary.find();
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/summaries", async (req, res) => {
  const { url, summary } = req.body;

  try {
    const newSummary = new Summary({ url, summary });
    await newSummary.save();
    res.status(201).json(newSummary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
