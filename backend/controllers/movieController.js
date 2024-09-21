const fetchFromTheMovieDatabaseAPI = require("../services/tmdbService");
// console.log("fetchFromAPI:", fetchFromTheMovieDatabaseAPI);
module.exports = {
  getTrendingMovie: async (req, res) => {
    try {
      const data = await fetchFromTheMovieDatabaseAPI(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
      );
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results?.length)];
      res.json({ success: true, content: randomMovie });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error.message,
      });
    }
  },
  getMovieTrailer: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await fetchFromTheMovieDatabaseAPI(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
      );
      res.json({ success: true, trailer: data.results });
    } catch (error) {
      if (error.message.includes("404")) {
        return res.status("404").send("null");
      }
      console.log(error);
      return res.send({
        error: error.message,
      });
    }
  },
  getMovieDetails(req, res) {
    const { id } = req.params;
      try {
        const data = fetchFromTheMovieDatabaseAPI(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`
        );
    } catch (error) {
      console.log(error);
      return res.send({
        error: error.message,
      });
    }
  },
};
