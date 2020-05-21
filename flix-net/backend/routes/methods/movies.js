const { MovieModel } = require("../../db");

getFourMovies = (req, res, next) => {
  // console.log('runs')
  // const fourMovies = req.models.movies.slice(1, 4);
  // console.log(fourMovies)
  // return res.send(fourMovies)
  console.log('runs')
  req.models.MovieModel.find()
  .then((response)=>{
    if(response.length > 0){
      res.status(204).send();
    }
    req.models.MovieModel.insertMany(req.models.movies)
    .then((response) => {
      console.log(response)
      return res.status(201).send(response);
    })
  })
}

postMovies = (req, res, next) => {
  req.models.MovieModel.insertMany(req.models.movies)
  .then((response) => {
    return res.status(201).send(response);
  })

}




module.exports = {
  getFourMovies,
  
};