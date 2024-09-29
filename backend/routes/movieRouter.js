const {
  getTrendingMovie,
  getMovieTrailer,
  getMovieDetails,
  getSimilarMovies,
  getCategory,
} = require("../controllers/movieController");

var routes = require("express").Router();

routes.get("/trending", getTrendingMovie);
routes.get("/:id/trailer", getMovieTrailer);
routes.get("/:id/detail", getMovieDetails);
routes.get("/:id/similar", getSimilarMovies);
routes.get("/:category", getCategory);
module.exports = routes;
