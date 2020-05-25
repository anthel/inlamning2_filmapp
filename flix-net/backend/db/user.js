const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: { // TODO: validator
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  watchList: {
    type: Array
  }
 
});

const User = mongoose.model('User', userSchema);
module.exports = User;