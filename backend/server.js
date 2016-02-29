var express = require('express');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.all('/tweets', function(req, res, next) {
  var tweets = require('../data/tweets.json').tweets;
  
  if (req.method == 'PUT') {
    var newTweet = {
      id: req.query.id,
      text: req.query.text,
    }
    tweets.push(newTweet);
  }

  if (req.method == 'DELETE') {
    var index = tweets.indexOf(req.query)
    tweets.splice(index, 1)
  }
  
  res.send(tweets);
  
  next();
});


app.listen(4730, function(){
  console.log('Backend Server started on http://localhost:4730')
});