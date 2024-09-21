const { login } = require("../controllers/authController");
const { getLoginValidate } = require("../validations/userValidate");
const { logout } = require("../controllers/authController");

var routes = require("express").Router();

routes.post("/login", getLoginValidate, login);
routes.post("/logout", logout);

module.exports = routes;
