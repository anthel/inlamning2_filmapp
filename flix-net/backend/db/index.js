const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.set("debug", process.env.NODE_ENV !== "production");

const movieSchema = require("./movieSchema");
const MovieModel = mongoose.model("Movie", movieSchema);

const User = require('./user.js');

function connectDb() {
  return mongoose
    .connect("mongodb://localhost:27017/users", {useNewUrlParser: true});
}

module.exports = {
  connectDb,
  models: {
    MovieModel,
    User
  }
  
};
