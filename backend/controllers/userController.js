const { hash } = require("bcryptjs");
const {
  createUserModel,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../models/userModel");
const responseHandler = require("../responseHandler");
module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await createUserModel(req.body);
      responseHandler(user, res);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await getAllUsers(req.query);
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await getUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await deleteUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  update: async (req, res) => {
    try {
      const user = await updateUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
