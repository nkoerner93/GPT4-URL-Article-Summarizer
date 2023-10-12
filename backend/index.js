import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import mongoose from "mongoose";
import { Summary } from "./models/summaryModel.js";
import router from "./routes/summaryRoutes.js";
import cors from "cors";

// Import Variables Variables
const mongodb = process.env.MONGODB_URI;
const port = process.env.BACKEND_PORT;

// server + listen
const app = express();
app.use(express.json());

// Setup CORS
const corsOptions = {
  origin: "https://website-summarizer-ten.vercel.app", // Replace with your allowed origin
};

app.use(cors(corsOptions));

// Setup LISTEN
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});

// Connect MongoDB
mongoose
  .connect(mongodb)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Close connection on shutdown
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Connection closed");
    process.exit(0);
  });
});

app.use("/api", router);
