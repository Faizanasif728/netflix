const { hash } = require("bcryptjs");
const {
  createUserModel,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  profile,
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
  getProfile: async (req, res) => {
    try {
      const userProfile = await profile(req.user);
      responseHandler(userProfile, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
