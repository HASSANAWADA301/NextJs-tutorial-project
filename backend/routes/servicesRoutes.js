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
    const serviceSection = await db.collection("services").findOne({});

    if (!serviceSection || !serviceSection.translations?.[lang]) {
      return res.status(404).json({ error: "Translation not found" });
    }

    const response = {
      imageUrl: serviceSection.imageUrl,
      videoUrl:serviceSection.videoUrl,
      translations: serviceSection.translations
    };

    res.json(response);
  } catch (err) {
    console.error("Error fetching services section:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});


module.exports = router;
