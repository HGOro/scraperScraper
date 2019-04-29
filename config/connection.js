//set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/nytscraper_db';
mongoose.connect(mongoDB, { useNewUrlParser: true});
var db = mongoose.connection;

db.once('open', function() {
    // we're connected!
    console.log("connected")
})

module.exports = db;


