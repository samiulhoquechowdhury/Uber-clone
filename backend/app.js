const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/db");

connectDB();

app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong");
});

module.exports = app;
