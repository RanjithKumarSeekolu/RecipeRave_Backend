const RecipeModel = require("../../models/recipe.model");

async function httpGetAllRecipes(req, res) {
  console.log("get all recipes called");
  const recipes = await RecipeModel.findAll();
  res.send(recipes);
}

module.exports = {
  httpGetAllRecipes,
};
