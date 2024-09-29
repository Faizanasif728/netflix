const users = require("../models/definitions/users");
const fetchFromTheMovieDatabaseAPI = require("../services/tmdbService");
module.exports = {
  searchPerson: async (req, res) => {
    const { query } = req.params;
    try {
      const response = await fetchFromTheMovieDatabaseAPI(
        `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
      );
      if (!response || !response.results || response.results.length === 0) {
        return res.status(404).send({ message: "No results found" });
      }
      const person = response.results[0];
      const user = await users.findByPk(req.userId);
      if (user) {
        const searchHistory = user.searchHistory || [];
        searchHistory.push({
          id: person.id,
          image: person.profile_path,
          title: person.name,
          searchType: "person",
          createdAt: new Date(),
        });
        await user.update({ searchHistory });
      }
      res.status(200).json({ success: true, content: response.results });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  searchMovie: async (req, res) => {
    const { query } = req.params;
    try {
      const response = await fetchFromTheMovieDatabaseAPI(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      );
      if (!response || !response.results || response.results.length === 0) {
        return res.status(404).send({ message: "No results found" });
      }
      const movie = response.results[0];
      const user = await users.findByPk(req.userId);
      if (user) {
        const searchHistory = user.searchHistory || [];
        searchHistory.push({
          id: movie.id,
          image: movie.poster_path,
          title: movie.title,
          searchType: "movie",
          createdAt: new Date(),
        });
        await user.update({ searchHistory });
      }
      res.status(200).json({ success: true, content: response.results });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  searchTv: async (req, res) => {
    const { query } = req.params;
    try {
      const response = await fetchFromTheMovieDatabaseAPI(
        `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
      );
      if (!response || !response.results || response.results.length === 0) {
        return res.status(404).send({ message: "No results found" });
      }
      const tv = response.results[0];
      const user = await users.findByPk(req.userId);
      if (user) {
        const searchHistory = user.searchHistory || [];
        searchHistory.push({
          id: tv.id,
          image: tv.poster_path,
          title: tv.name,
          searchType: "tv",
          createdAt: new Date(),
        });
        await user.update({ searchHistory });
      }
      res.status(200).json({ success: true, content: response.results });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  getSearchHistory: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  removeItemFromSearchHistory: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
