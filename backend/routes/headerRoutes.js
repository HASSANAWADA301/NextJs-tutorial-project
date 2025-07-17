const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("ReactApp");
    const config = await db.collection("header-config").findOne({});

    if (!config) {
      return res.status(404).json({ error: "Config not found" });
    }

    const response = {
      navItems: config.navItems, 
      contactLabel: config.contactLabel, 
      showSearchIcon: config.showSearchIcon,
      showUserIcon: config.showUserIcon,
      logoUrl: config.logoUrl,
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching headers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

module.exports = router;
