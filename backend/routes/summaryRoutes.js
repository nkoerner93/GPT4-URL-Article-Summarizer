import express from "express";
import { Summary } from "../models/summaryModel.js";

const router = express.Router();

router.get("/summaries", async (req, res) => {
  try {
    const { url } = req.query;

    if (url) {
      const summaries = await Summary.findOne({ url });
      return res.json(summaries);
    } else {
      const summaries = await Summary.find();
      return res.json(summaries);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
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
