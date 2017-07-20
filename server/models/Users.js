const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

var User = mongoose.model('User', userSchema)

module.exports = User
