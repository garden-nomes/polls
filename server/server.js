const express = require('express'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      passport = require('passport'),
      bodyParser = require('body-parser');

const routes = require('./routes'),
      Poll = require('./models/poll');

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/polls',
      port = process.env.PORT || 8000

mongoose.connect(mongoUri);

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err });
});

app.listen(port, () => {
  console.log('* listening on port ' + port + '...');
});
