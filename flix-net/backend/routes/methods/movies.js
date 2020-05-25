addMoviesToDb = (req, res, next) => {

  req.models.MovieModel.find()
  .then((response)=>{
    if(response.length > 0){
      res.status(204).send();
    }
    req.models.MovieModel.insertMany(req.models.movies)
    .then((response) => {
      return res.status(201).send(response);
    }).catch((error) => {
      next(error);
    })
  })
}

getMovies = (req, res, next) =>{

  req.models.MovieModel.find()
  .then(allMovies => {
    if (req.query.Title){
      const matchingMovies = allMovies.filter(movie => movie.Title.toLowerCase().startsWith(req.query.Title) || movie.Title.toUpperCase().startsWith(req.query.Title ))
      console.log(matchingMovies) 
       res.send(matchingMovies)
    }
  })
  .catch(err => {
    next(err);
  })
}

getMoviesForCarousel = (req, res, next) => {
  req.models.MovieModel.find()
  .sort({'imdbRating': -1})
  .limit(4)
  .then((response)=> {
    res.status(200).send(response);
  }).catch((error)=>{
    next(error);
  })
}




module.exports = {
  addMoviesToDb,
  getMoviesForCarousel,
  getMovies,
  
};
