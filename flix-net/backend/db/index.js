const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.set("debug", process.env.NODE_ENV !== "production");

const movieSchema = require("./movieSchema");
const MovieModel = mongoose.model("Movie", movieSchema);

function connectDb() {
  return mongoose
    .connect("mongodb://localhost:27017/movies")
    .then(() => console.log(" mongo DB connected"));
}

module.exports = {
  connectDb,
  MovieModel,
};
