const {
  createUser,
  getAll,
  getUser,
  deleteUser,
  update,
  getProfile,
} = require("../controllers/userController");
const middleware = require("../middleware");
const {
  createUserValidate,
  getAllUserValidate,
  getUserValidate,
  updateUserValidate,
} = require("../validations/userValidate");

var routes = require("express").Router();

routes.post("/create", createUserValidate, createUser);
routes.get("/getAll", middleware, getAllUserValidate, getAll);
routes.get("/getUser", getUserValidate, getUser);
routes.delete("/deleteUser", getUserValidate, deleteUser);
routes.patch("/updateUser", updateUserValidate, update);
routes.get("/getProfile", middleware, getProfile);
module.exports = routes;
