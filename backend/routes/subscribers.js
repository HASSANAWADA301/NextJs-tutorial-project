const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.ATLAS_URI);

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }

    await client.connect();
    const db = client.db("ReactApp");

    const result = await db.collection("subscribers").insertOne({ email, subscribedAt: new Date() });

    res.status(201).json({ message: "Email subscribed successfully", id: result.insertedId });
  } catch (err) {
    console.error("Error subscribing email:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

module.exports = router;
