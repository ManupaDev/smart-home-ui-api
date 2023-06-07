"use strict";
const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

//! Local DB setup
const DB = process.env.DATABASE_URL;
mongoose.connect(DB).then(() => {
  console.log("DB connections successful");
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
