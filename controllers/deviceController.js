"use strict";
const express = require("express");
const mongoose = require("mongoose");

const Device = require("../models/deviceModel.js");

const getAllDevices = async function (req, res) {
  try {
    const devices = await Device.find();

    res.status(200).json({
      status: "success",
      data: devices,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

const createDevice = async function (req, res) {
  const { name, status } = req.body;

  const newDevice = await Device.create({ name, status });

  try {
    res.status(201).json({
      status: "success",
      data: newDevice,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const getDevice = async function (req, res) {
  try {
    res.status(200).json({
      status: "success",
      data: {},
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

const updateDevice = async function (req, res) {
  try {
    res.status(200).json({
      status: "success",

      data: {},
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

const deleteDevice = async function (req, res) {
  try {
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getAllDevices = getAllDevices;
exports.getDevice = getDevice;
exports.updateDevice = updateDevice;
exports.deleteDevice = deleteDevice;
exports.createDevice = createDevice;
