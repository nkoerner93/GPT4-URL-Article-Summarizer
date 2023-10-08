import mongoose from "mongoose";

const summarySchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

export const Summary = mongoose.model("Summary", summarySchema);
