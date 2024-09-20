const sequelize = require("../bin/DBconnection");
const users = require("./definitions/users");
const sessions = require("./definitions/sessions");
const models = { users };

users.hasOne(sessions, { foreignKey: "userId" });
sessions.belongsTo(users, { foreignKey: "userId" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
