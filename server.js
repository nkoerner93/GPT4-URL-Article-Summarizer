// Import MONGODB Variables

const mongodbURI = import.meta.env.VITE_MONGODB_URI;

// server.js

const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const uri = mongodbURI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

// Set Routes
const apiRoutes = require("./routes/api");

// Use routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
