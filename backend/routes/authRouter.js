const { login } = require("../controllers/authController");
const { getLoginValidate } = require("../validations/userValidate");

var routes = require("express").Router();

routes.post("/login", getLoginValidate, login);

module.exports = routes;
