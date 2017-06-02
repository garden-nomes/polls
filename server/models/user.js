const mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    require: true
  }
});

// hash password
UserSchema.pre('save', function(cb) {
  if (!this.isModified('password')) return cb();

  bcrypt.genSalt(5, (err, salt) => {
    if (err) return cb(err);

    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return cb(err);
      this.password = hash;
      cb();
    })
  });
});

// check password
UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  })
};

module.exports = mongoose.model('User', UserSchema);
