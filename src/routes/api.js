const express = require("express");

const recipeRouter = require("../modules/recipe/index");
// const launchesRouter = require("./launches/launches.router");

const api = express.Router();

api.use("/recipe", recipeRouter);
// api.use("/launches", launchesRouter);

module.exports = api;
