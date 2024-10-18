const userModel = require("../../models/user.model");
const { sendResponse, sendError } = require("../../utils/response");

async function httpCreateUser(req, res) {
  try {
  } catch (err) {
    sendError(res, err);
  }
}

async function httpGetAllUsers(req, res) {
  try {
    const users = await userModel.findAll({ where: {} });
    return sendResponse(res, 200, users, null);
  } catch (err) {
    sendError(res, err);
  }
}

async function httpGetUser(req, res) {
  try {
    const { id } = req.params;
    let dynamicWhere = {};
    if (id) {
      dynamicWhere.id = id;
    }
    const user = await userModel.findOne({ where: dynamicWhere });

    if (!user) {
      return sendResponse(res, 404, null, "User not found");
    }

    return sendResponse(res, 200, user, null);
  } catch (err) {
    sendError(res, err);
  }
}

module.exports = {
  httpGetAllUsers,
  httpGetUser,
};
