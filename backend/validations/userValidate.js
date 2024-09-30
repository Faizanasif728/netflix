const joi = require("joi");

module.exports = {
  createUserValidate: async (req, res, next) => {
    const checkUserValidation = joi.object({
      // firstName: joi.string().min(3).max(30).required(),
      // lastName: joi.string().min(3).max(30).required(),
      email: joi.string().email().required(),
      username: joi.string().min(3).max(34).required(),
      password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    try {
      const validate = await checkUserValidation.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  deleteUserValidate: async (req, res, next) => {
    const getUsername = joi.object({
      username: joi.string().min(3).max(34),
      password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    try {
      const validate = await getUsername.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  updateUserValidate: async (req, res, next) => {
    const update = joi.object({
      // firstName: joi.string(),
      // lastName: joi.string(),
      email: joi.string().email(),
      username: joi.string().min(3).max(34),
      // userId: joi.string(),
    });
    try {
      const validate = await update.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getLoginValidate: async (req, res, next) => {
    const loginUser = joi.object({
      email: joi.string().email().required(),
      password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    try {
      const validate = await loginUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
