// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


const db = mongoose.connection;

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:  String,
    summary: String,
    href:   String,
    comments: [String],
});

var Article = mongoose.model('Article', articleSchema);


db.on('error',(error) => {
    console.log(error)
});

db.once('open', function() {
  // we're connected!
  console.log("connected")
  var article1 = new Article({title: 'Small'});
  article1.save(function(err){
      if(err){
          console.log(err)
          return
      }
      console.log('save')
      mongoose.disconnect()

  });
});



