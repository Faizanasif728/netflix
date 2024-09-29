const { models } = require("./index");

module.exports = {
  createUserModel: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return { response: user };
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  getUser: async ({ username, email }) => {
    try {
      const users = await models.users.findOne({
        where: {
          ...(username ? { username: username } : { email: email }),
        },
      });

      return { response: users };
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  },
  deleteUser: async ({ username, email }) => {
    try {
      const user = await models.users.destroy({
        where: {
          ...(username ? { username: username } : { email: email }),
        },
      });
      return { response: user };
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  },
  updateUser: async ({ username, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            username: username,
          },
        }
      );
      return { response: user };
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  profile: async ({ username }) => {
    try {
      const user = await models.users.findOne({
        where: {
          username: username,
        },
        attributes: {
          exclude: ["password"],
        },
      });
      return { response: user };
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
