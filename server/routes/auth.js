const express = require('express'),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      TwitterStrategy = require('passport-twitter').Strategy,
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      User = require('../models/user');

const auth = express.Router(),
      twitter = express.Router();

//  Twitter OAuth

passport.use('twitter', new TwitterStrategy({
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_SECRET,
    callbackURL: `${process.env.BASE_URL}/auth/twitter/callback`
  },
  (token, tokenSecret, profile, cb) => {
    User.findOne({ twitterId: profile.id }, (err, user) => {
      if (err) return cb(err);

      if (!user) {
        User.create({
            twitterId: profile.id,
            name: profile.displayName,
            username: profile.username
          },
          (err, user) => cb(err, user)
        );
      } else {
        cb(null, user);
      }
    })
  }
));

twitter.get('/', passport.authenticate('twitter', { display: 'popup' }));

twitter.get('/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/auth/success', // TODO set up error route
    session: false
  }),
  (req, res) => {
    const token = jwt.sign({ sub: req.user._id }, process.env.SECRET_KEY);
    res.redirect(`http://127.0.0.1:3000/auth/success?token=${token}`);
  }
);

auth.use('/twitter', twitter);
module.exports = auth;
