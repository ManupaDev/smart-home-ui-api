"use strict";
const express = require("express");
const deviceController = require("../controllers/deviceController.js");

const router = express.Router();

router
  .route("/")
  .get(deviceController.getAllDevices)
  .post(deviceController.createDevice);
router
  .route("/:id")
  .get(deviceController.getDevice)
  .patch(deviceController.updateDevice)
  .delete(deviceController.deleteDevice);

module.exports = router;
