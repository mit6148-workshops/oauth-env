const mongoose = require('mongoose');

// set up mongoDB connection
const mongoURL = i_wonder_what_goes_here;
const options = {
  useNewUrlParser: true
};
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
