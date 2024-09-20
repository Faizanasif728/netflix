require("dotenv").config();
const { getUser } = require("../models/userModel");
const responseHandler = require("../responseHandler");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    try {
      const isUser = await getUser(req.body);
      if (isUser.error || isUser.response) {
        isUser.error
          ? (isUser.error = "Invalid User")
          : (isUser.response = "Invalid User");
        return responseHandler(isUser, res);
      }
      const { password } = isUser.response.dataValues;
      const isValid = await compare(req.body.password, password);
      if (!isValid) {
        return responseHandler({ response: "Invalid credentials" }, res);
      }
      const user = isUser.response.dataValues;
      delete user.password;
      const token = sign(user, process.env.SECRET);
      return responseHandler({ response: token }, res);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
