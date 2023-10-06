import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import express from "express";
import mongoose from "mongoose";
import { Summary } from "./models/summaryModel.js";
import summaryRoutes from "./routes/summaryRoutes.js"; // Add this import

// Import Variables Variables
const mongodb = process.env.VITE_MONGODB_URI;
const port = process.env.VITE_PORT;

// server.js
const app = express();
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(mongodb)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", summaryRoutes);
