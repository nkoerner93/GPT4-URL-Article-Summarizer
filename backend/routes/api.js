const express = require("express");
const router = express.Router();

// Assuming `client` is the MongoDB client connected in server.js

router.post("/insert", (req, res) => {
  const collection = client
    .db("cluster0")
    .collection("ai-summarizer")
    .collection("summarized-urls");

  const document = req.body;

  collection.insertOne(document, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("Document inserted");
    }
  });
});

router.get("/query", (req, res) => {
  const collection = client
    .db("cluster0")
    .collection("ai-summarizer")
    .collection("summarized-urls");

  const query = req.query.url; // Assuming the request contains a URL parameter

  collection.findOne({ url: query }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
