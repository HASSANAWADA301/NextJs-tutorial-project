// db/conn.js
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);
let db;

async function connectToDB() {
  try {
    if (!db) {
      await client.connect();
      db = client.db("ReactApp");
      console.log("MongoDB Connected");
    }
    return db;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

module.exports = connectToDB;
