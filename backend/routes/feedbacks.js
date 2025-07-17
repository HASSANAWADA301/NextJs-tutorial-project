// routes/feedback.js
const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);

router.get("/", async (req, res) => {
  const lang = req.query.lang || "en";
  try {
    await client.connect();
    const db = client.db("ReactApp");
    const doc = await db.collection("feedbacks").findOne({ _id: "feedback-section" });

    if (!doc || !doc.translations?.[lang]) {
      return res.status(404).json({ error: "Translation not found" });
    }

    res.json(doc.translations);
  } catch (error) {
    console.error("Error fetching feedback section:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

module.exports = router;
