require("dotenv").config();
const { getUser } = require("../models/userModel");
const responseHandler = require("../responseHandler");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    try {
      const isUser = await getUser(req.body);
      if (isUser.error || !isUser.response) {
        isUser.error
          ? (isUser.error = "Invalid User")
          : (isUser.response = "Invalid User");
        res.cookie("auth", "undefined");
        return responseHandler(isUser, res);
      }
      const { password } = isUser.response.dataValues;
      const isValid = await compare(req.body.password, password);
      if (!isValid) {
        res.cookie("auth", "undefined");
        return responseHandler({ response: "Invalid credentials" }, res);
      }
      const user = isUser.response.dataValues;
      delete user.password;
      const token = sign(user, process.env.SECRET, {
        expiresIn: "15d",
      });
      res.cookie("auth", token);
      return responseHandler(
        {
          response: {
            message: "User login successfully",
            token: token,
          },
        },
        res
      );
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("auth");
      return res.send({
        response: "Logged out successfully",
      });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
