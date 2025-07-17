const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("ReactApp");
    const collection = db.collection("who-we-are");

    const doc = await collection.findOne({});
    if (!doc || !doc.translations) {
      return res.status(404).json({ error: "Translation data not found" });
    }

    const response = {
      imageUrl: doc.imageUrl,
      translations: doc.translations,
    };

    res.json(response);
  } catch (err) {
    console.error("Error fetching who-we-are section:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

module.exports = router;
