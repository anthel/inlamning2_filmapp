const { MovieModel } = require("../../db");

getFourMovies = (req, res, next) => {
  console.log(req.models.movies)
  req.models.movies.forEach((movie)=>{
    res.send(movie);
  })
  // console.log('in backend')
  // console.log(MovieModel)
  // MovieModel.forEach((movie)=> {
  //   console.log(movie)
  //   return res.send(movie[0]);
  // })
  // console.log(movies)
  // .then((movies) =>{
  //   return res.send(movies)
  // }).catch((error) =>{
  //   return next(error)
  // });
}




module.exports = {
  getFourMovies,
  
};