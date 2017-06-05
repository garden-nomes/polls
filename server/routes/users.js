const express = require('express'),
      User = require('../models/user'),
      authenticate = require('../lib/authenticate');

const users = express.Router();

users.get('/me', authenticate, (req, res) => {
  res.send(req.user);
});

module.exports = users;
