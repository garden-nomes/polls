const express = require('express'),
      polls = require('./polls'),
      users = require('./users');

const routes = express.Router();
routes.use('/polls', polls);
routes.use('/users', users);

module.exports = routes;
