const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("ReactApp");
    const result = await db.collection("bestPrices").findOne({});

    if (!result || !result.translations) {
      return res.status(404).json({ error: "Data not found" });
    }

    // Return all translations, heading, and highlight (assuming heading and highlight are language-independent)
    res.json({
      heading: result.heading,
      highlight: result.highlight,
      translations: result.translations
    });
  } catch (error) {
    console.error("Error fetching pricing data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});


module.exports = router;
