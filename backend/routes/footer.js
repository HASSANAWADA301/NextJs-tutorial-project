const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("ReactApp");
    const collection = db.collection("footer");

    const data = await collection.findOne({});
    if (!data || !data.translations) {
      return res.status(404).json({ error: "No footer data found." });
    }

    res.json(data.translations); 
  } catch (error) {
    console.error("Error fetching footer section:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});


module.exports = router;
