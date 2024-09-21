const {
  getTrendingMovie,
  getMovieTrailer,
  getMovieDetails,
} = require("../controllers/movieController");

var routes = require("express").Router();

routes.get("/trending", getTrendingMovie);
routes.get("/:id/trailer", getMovieTrailer);
routes.get("/:id/details", getMovieDetails);

module.exports = routes;
