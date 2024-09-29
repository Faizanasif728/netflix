const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBconnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");

class users extends Model {}

users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    // firstName: {
    //   type: DataTypes.STRING(34),
    //   allowNull: false,
    // },
    // lastName: {
    //   type: DataTypes.STRING(34),
    //   allowNull: false,
    // },
    username: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      default: "",
    },
    searchHistory: {
      type: DataTypes.JSONB, // Using JSONB to store an array of objects
      allowNull: true,
      defaultValue: [],
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);

users.beforeCreate(async (user) => {
  user.userId = uuid();
  user.password = await hash(user.password, 10);
});
users.afterCreate(async (user) => {
  console.log("user", user);
  delete user.dataValues.password;
});

module.exports = users;
