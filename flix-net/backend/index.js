const express = require("express");
const { connectDb, MovieModel } = require("./db");
const { createOrUpdateStudent } = require("./routes/studentRoutes");
const movies = require ('./movies')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.put("/student/:id", createOrUpdateStudent);
app.put("/student", createOrUpdateStudent);

connectDb()
  .then(() => app.listen(3000))
  .catch(console.error);


