const express = require("express");
const userRouter = express.Router();
const {
  httpCreateUser,
  httpGetAllUsers,
  httpGetUser,
  httpDeleteUser,
} = require("./user.controller");

userRouter.post("/", httpCreateUser);
userRouter.get("/", httpGetAllUsers);
userRouter.get("/:id", httpGetUser);
userRouter.delete("/:id", httpDeleteUser);

module.exports = userRouter;
