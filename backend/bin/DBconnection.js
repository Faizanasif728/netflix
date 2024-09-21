require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((error) => {
    console.log("Failed to connect", error);
  });

module.exports = sequelize;
