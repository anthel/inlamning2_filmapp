const mongoose = require("mongoose");
const movieSchema = require("./movieSchema");
const MovieModel = mongoose.model("MovieModel", movieSchema);

const User = require('./user.js');

function connectDb() {
  return mongoose
    .connect("mongodb://localhost:27017/users", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
}

module.exports = {
  connectDb,
  models: {
    MovieModel,
    User
  }
  
};
