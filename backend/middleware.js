require("dotenv").config();
const { verify } = require("jsonwebtoken");

const middleware = (req, res, next) => {
  try {
    const { auth } = req.cookies;
    if (auth === "undefined") {
      return res.send({ error: "Unauthorized" });
    }
    verify(auth, process.env.SECRET, (error, data) => {
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
