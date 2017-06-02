const passport = require('passport'),
      BasicStrategy = require('passport-http').BasicStrategy,
      User = require('../models/user');

passport.use(new BasicStrategy((email, password, cb) => {
  User.findOne({ email }, (err, user) => {
    if (err) return cb(err);
    if (!user) return cb(null, false);

    user.verifyPassword(password, (err, isMatch) => {
      if (err) return cb(err);
      if (!isMatch) return cb(err, false);

      return cb(null, user);
    })
  });
}));

const isAuthenticated = passport.authenticate('basic', { session: false });

module.exports = { isAuthenticated };
