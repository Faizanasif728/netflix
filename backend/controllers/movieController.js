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
  getMovieDetails: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await fetchFromTheMovieDatabaseAPI(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`
      );
      res.json({ success: true, content: data });
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
  getSimilarMovies: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await fetchFromTheMovieDatabaseAPI(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
      );
      res.json({ success: true, similar: data.results });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error.message,
      });
    }
  },
  getCategory: async (req, res) => {
    const { category } = req.params;
    try {
      const data = await fetchFromTheMovieDatabaseAPI(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
      );
      res.json({ success: true, content: data.results });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error.message,
      });
    }
  },
};
