const {
  searchPerson,
  searchMovie,
  searchTv,
  // getSearchHistory,
  // removeItemFromSearchHistory,
} = require("../controllers/searchControllers");

var routes = require("express").Router();

routes.get("/person/:query", searchPerson);
routes.get("/movie/:query", searchMovie);
routes.get("/tv/:query", searchTv);

// routes.get("/history", getSearchHistory);
// routes.delete("/history/:id", removeItemFromSearchHistory);

module.exports = routes;
