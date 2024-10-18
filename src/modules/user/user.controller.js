const userModel = require("../../models/user.model");
const { sendResponse, sendError } = require("../../utils/response");

async function httpCreateUser(req, res) {
  try {
    const { username, email, password, profile_picture_url } = req.body.data;
    if (!username || !email || !password) {
      return sendResponse(res, 400, null, "All fields are required");
    }
    const newUser = await userModel.create({
      username: username,
      email: email,
      password_hash: password,
      profile_picture_url: profile_picture_url,
    });

    return sendResponse(res, 201, newUser, null);
  } catch (err) {
    console.error(err);
    sendError(res, err);
  }
}

async function httpGetAllUsers(req, res) {
  try {
    const users = await userModel.findAndCountAll({ where: {} });
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
  httpCreateUser,
  httpGetAllUsers,
  httpGetUser,
};
