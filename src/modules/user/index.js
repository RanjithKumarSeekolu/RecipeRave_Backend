const express = require("express");
const userRouter = express.Router();
const { httpGetAllUsers, httpGetUser } = require("./user.controller");

userRouter.get("/", httpGetAllUsers);
userRouter.get("/:id", httpGetUser);

module.exports = userRouter;
