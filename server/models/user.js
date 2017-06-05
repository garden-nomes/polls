const mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  twitterId: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
