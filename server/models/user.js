const mongoose = require('mongoose'),
      timestamps = require('../mongoose/timestamps');

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

UserSchema.plugin(timestamps);
module.exports = mongoose.model('User', UserSchema);
