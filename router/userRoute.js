const express = require("express")
const Router = express.Router();
const { saveUser, userLogin } = require("./../controller/user");

Router.post("/login", userLogin)
Router.post("/signup", saveUser)

module.exports = Router;