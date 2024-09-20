const {
  createUser,
  getAll,
  getUser,
  deleteUser,
  update,
} = require("../controllers/userController");
const {
  createUserValidate,
  getAllUserValidate,
  getUserValidate,
  updateUserValidate,
} = require("../validations/userValidate");

var routes = require("express").Router();

routes.post("/create", createUserValidate, createUser);
routes.get("/getAll", getAllUserValidate, getAll);
routes.get("/getUser", getUserValidate, getUser);
routes.delete("/deleteUser", getUserValidate, deleteUser);
routes.patch("/updateUser", updateUserValidate, update);
module.exports = routes;
