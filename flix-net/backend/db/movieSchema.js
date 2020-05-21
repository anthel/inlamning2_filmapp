mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Genre: String,
  Poster: String,
  imdbRating: String,
  Plot: String,
  Actors: String,
  Genre: String
});

module.exports = movieSchema;
