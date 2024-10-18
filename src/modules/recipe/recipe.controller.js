const RecipeModel = require("../../models/recipe.model");
const UserModel = require("../../models/user.model");
const { sendResponse, sendError } = require("../../utils/response");

async function httpGetAllRecipes(req, res) {
  try {
    const recipes = await RecipeModel.findAll({
      include: {
        model: UserModel,
        as: "author",
        attributes: ["id", "username", "profile_picture_url"],
      },
    });
    return sendResponse(res, 200, recipes, null);
  } catch (err) {
    sendError(res, err);
  }
}

module.exports = {
  httpGetAllRecipes,
};
