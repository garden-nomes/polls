const passport = require('passport'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      User = require('../models/user');

passport.serializeUser((user, cb) => cb(null, user._id));
passport.deserializeUser((userId, cb) => {
  User.findById(userId, (err, user) => cb(err, user));
});

passport.use('jwt', new JwtStrategy({
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  },
  (payload, cb) => {
    console.log({ payload })
    User.findOne({ _id: payload.sub }, (err, user) => {
      if (err) return cb(err);

      if (user) {
        cb(null, user);
      } else {
        cb(null, false);
      }
    });
  }
));


module.exports = passport.authenticate('jwt', { session: false });
