const express = require("express");
const cors = require('cors')

const { models, connectDb, MovieModel } = require("./db");
// const { createOrUpdateStudent } = require("./routes/studentRoutes");
const movies = require ('./movies')

const routes = require('./routes');

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.put("/user/:id", createOrUpdateStudent);




//Middleware for accessing mongo models on every request
app.use((req, res, next) => {
  req.models = models;
  req.models.movies = movies;
  next()
})
// Access all routes from a separate file
app.use('/', routes);

const port = process.env.PORT || 4000;

connectDb()
  .then(() => {
    const listener = app.listen(port, () => {
    console.info(`Flix-Net API listening on port ${listener.address().port}!`)
  })
}).catch(console.error);


module.exports = app;
