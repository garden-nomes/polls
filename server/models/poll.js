const mongoose = require('mongoose'),
      timestamps = require('../mongoose/timestamps');

const PollSchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  question: {
    type: String,
    required: true
  },
  options:  [{
    name: {
      type: String,
      required: true
    },
    votes: {
      type: Number,
      default: 0
    }
  }]
});

PollSchema.plugin(timestamps);
module.exports = mongoose.model('Poll', PollSchema);
