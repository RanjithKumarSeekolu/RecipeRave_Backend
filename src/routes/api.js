const express = require("express");

const recipeRouter = require("../modules/recipe");
const userRouter = require("../modules/user");
// const launchesRouter = require("./launches/launches.router");

const api = express.Router();

api.use("/recipe", recipeRouter);
api.use("/user", userRouter);
// api.use("/launches", launchesRouter);

module.exports = api;
