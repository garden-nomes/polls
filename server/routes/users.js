const express = require('express'),
      User = require('../models/user'),
      isAuthenticated = require('../lib/auth').isAuthenticated;

const users = express.Router();

users.get('/', isAuthenticated, (req, res, next) => {
  User.find((err, users) => {
    if (err) return next(err);
    res.send(users);
  });
});

users.post('/', (req, res, next) => {
  let user = new User();

  user.email = req.body.email;
  user.password = req.body.password;

  user.save(err => {
    if (err) return next(err);
    res.send(user)
  })
});

module.exports = users;
