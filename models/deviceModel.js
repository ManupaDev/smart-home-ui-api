"use strict";
const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
