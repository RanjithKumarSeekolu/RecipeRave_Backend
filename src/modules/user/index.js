const express = require("express");
const userRouter = express.Router();
const {
  httpCreateUser,
  httpGetAllUsers,
  httpGetUser,
} = require("./user.controller");

userRouter.post("/", httpCreateUser);
userRouter.get("/", httpGetAllUsers);
userRouter.get("/:id", httpGetUser);

module.exports = userRouter;
