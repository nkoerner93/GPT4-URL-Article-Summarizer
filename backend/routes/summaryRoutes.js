import express from "express";
import { Summary } from "../models/summaryModel.js";

const router = express.Router();

// GET Summaries
router.get("/summaries", async (requestuest, response) => {
  try {
    const { url } = requestuest.query;
    if (url) {
      const Summaries = await Summary.findOne(Summary.url);
      response.status(200).json(Summaries);
    } else {
      const Summaries = await Summary.find();
      response.status(200).json(Summaries);
    }
  } catch (error) {
    console.log(error.message);
  }
});

// POST Summaries
router.post("/summaries", async (request, reponse) => {
  const { url, summary } = request.body;

  try {
    const newSummary = new Summary({ url, summary });
    await newSummary.save();
    reponse.status(201).json(newSummary);
  } catch (error) {
    reponse.status(400).json({ message: error.message });
  }
});

export default router;
