require("dotenv").config();
const { verify } = require("jsonwebtoken");

const middleware = (req, res, next) => {
  try {
    // const { auth } = req.cookies;
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    // if (auth === "undefined")
    if (!token) {
      return res.send({ error: "Unauthorized" });
    }
    verify(token, process.env.SECRET, (error, data) => {
      if (error) {
        return res.send({ error: "Forbidden" });
      }
      req.user = data;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.send({
      error: error,
    });
  }
};

module.exports = middleware;
