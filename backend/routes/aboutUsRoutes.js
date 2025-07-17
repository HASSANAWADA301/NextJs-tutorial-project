const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("ReactApp");
    const config = await db.collection("about-us").findOne({});

    if (!config) {
      return res.status(404).json({ error: "Data not found" });
    }

    const response = {
      imageUrl: config.imageUrl,
      translations: config.translations, // ✅ this is the critical fix
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching about us section:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});



module.exports = router;
