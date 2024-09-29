const {
  createUser,
  deleteUser,
  update,
  getProfile,
} = require("../controllers/userController");
const middleware = require("../middleware");
const {
  createUserValidate,
  deleteUserValidate,
  updateUserValidate,
} = require("../validations/userValidate");

var routes = require("express").Router();

routes.post("/create", createUserValidate, createUser);
routes.delete("/deleteUser", deleteUserValidate, deleteUser);
routes.patch("/updateUser", updateUserValidate, update);
routes.get("/getProfile", middleware, getProfile);
module.exports = routes;
