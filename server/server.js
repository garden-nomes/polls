const express = require('express'),
      session = require('express-session'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      passport = require('passport'),
      bodyParser = require('body-parser');

const config =require('./config'),
      routes = require('./routes'),
      Poll = require('./models/poll');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI);

const app = express();

app.use(session({
  secret: 'asihdfasdf',
  resave: true,
  saveUninitialized: true
}));
app.use(morgan(config.logFormat));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err });
});

app.listen(config.port, () => {
  console.log('* listening on port ' + config.port + '...');
});
