require('dotenv').config();

module.exports = {
  mongoURI:   process.env.MONGO_URI || 'mongodb://localhost:27017/polls',
  port:       process.env.PORT      || 8000,
  logFormat: 'dev'
}
