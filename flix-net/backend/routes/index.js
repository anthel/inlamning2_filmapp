// ALL THE HTTPMETHODS...
const methods = require('./methods/users.js');
const methodsMovies = require('./methods/movies.js')
const express = require('express');

const router = express.Router();



router.get("/users", methods.getUsers);
router.post('/users', methods.createUser);

router.get("/movies", methodsMovies.getFourMovies)


module.exports = router;
