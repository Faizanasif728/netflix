const {
  getTvShowTrending,
  getTvShowSimilar,
  getTvShowDetails,
  getTvShowTrailer,
  getTvShowCategory,
} = require("../controllers/tvShowsController");

var routes = require("express").Router();

routes.get("/trending", getTvShowTrending);
routes.get("/:id/trailer", getTvShowTrailer);
routes.get("/:id/detail", getTvShowDetails);
routes.get("/:id/similar", getTvShowSimilar);
routes.get("/:category", getTvShowCategory);
module.exports = routes;
