"use strict";
const express = require("express");
const deviceRouter = require("./routers/deviceRouter.js");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//! Global Midlleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//! Mount Routers
app.use("/api/devices", deviceRouter);

module.exports = app;
