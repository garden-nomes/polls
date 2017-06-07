const express = require('express'),
      Poll = require('../models/poll'),
      authenticate = require('../lib/authenticate');


const polls = express.Router();

polls.get('/', (req, res, next) => {
  Poll.find().sort('-createdAt').populate('_user', 'name').exec((err, polls) => {
    if (err) return next(err);
    res.send(polls);
  });
});

polls.post('/', authenticate, (req, res, next) => {
  let poll = new Poll();

  poll._user = req.user._id;
  poll.question = req.body.question;
  poll.options = req.body.options.map(option => ({ name: option }));

  console.log(poll);

  poll.save(err => {
    if (err) return next(err);
    res.send(poll)
  })
});

polls.get('/:id', (req, res, next) => {
  Poll.findOne({ _id: req.params.id }, (err, poll) => {
    if (err) return next(err);
    res.send(poll);
  });
});

polls.put('/:id/vote/:optionId', (req, res, next) => {
  Poll.findOneAndUpdate(
    { _id: req.params.id, 'options._id': req.params.optionId },
    { $inc: { 'options.$.votes': 1 }},
    { new: true },
    (err, poll) => {
      if (err) return next(err);
      res.send(poll);
    }
  );
});

polls.delete('/:id', authenticate, (req, res, next) => {
  Poll.remove({ _id: req.params.id, _user: req.user._id }, err => {
    if (err) return next(err);
    res.send({});
  });
});

module.exports = polls;
