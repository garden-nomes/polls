const express = require('express'),
      polls = require('./polls'),
      users = require('./users'),
      auth = require('./auth');

const routes = express.Router(),
      api = express.Router();

// these endpoints are behind /api
api.use('/polls', polls);
api.use('/users', users);

routes.use('/api', api);
routes.use('/auth', auth);

module.exports = routes;
