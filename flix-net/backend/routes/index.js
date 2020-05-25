// ALL THE HTTPMETHODS...
const methods = require('./methods/users.js');
const methodsMovies = require('./methods/movies.js')
const express = require('express');

const router = express.Router();



router.get("/users/:currentUser", methods.getCurrentUser);
router.put("/users/:signInUser", methods.loginUser);
router.post('/users', methods.createUser);
router.patch('/users/:username', methods.saveMovieToUser)
router.patch('/users/delete/:username', methods.removeMovieFromUser);

router.get("/movies/carousel", methodsMovies.getMoviesForCarousel);
router.get("/movies/moviesDb", methodsMovies.addMoviesToDb);
router.get("/movies", methodsMovies.getMovies);

module.exports = router;
