// ALL THE HTTPMETHODS...
const methods = require('./methods/users.js');
const express = require('express');

const router = express.Router();



router.get("/users", methods.getUsers);
router.put("/users/:signInUser", methods.loginUser);
router.post('/users', methods.createUser);


module.exports = router;
