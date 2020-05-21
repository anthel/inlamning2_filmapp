mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Genre: String,
  Poster: String
});

module.exports = movieSchema;
