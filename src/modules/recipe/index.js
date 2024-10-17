const express = require("express");
const recipeRouter = express.Router();
const { httpGetAllRecipes } = require("./recipe.controller");

recipeRouter.get("/", httpGetAllRecipes);

module.exports = recipeRouter;
