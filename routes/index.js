var store = require('../store');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  var tweets = store.list();
  var name = store.list();
  res.render('index', { title: 'Twitter.js', tweets: tweets, name:name, show_name: false }); 
});
 
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = store.find({name: name});

  res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: list, show_name: true });
  console.log(list);
});

router.get('/users/:name/tweets/:id', function(req,res) {
	var name = req.params.name;
	var tweetId = Number(req.params.id);
	var list = store.find({id: tweetId});
	res.render('index', {title: 'Twitter.js - A single tweet by ' +name, tweets:list, show_name: true });
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  
  store.shift(name, text);

  res.redirect('/');
  io.sockets.emit("new_tweet", {name:name, text:text});

});



module.exports = router;
