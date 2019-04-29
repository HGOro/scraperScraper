var express = require('express');
var router = express.Router();
// var db = require("../models");
var articleController = require('../controllers/articleController')
var Article = require('../models/article')

/* GET home page. */
router.get('/', function (req, res, next) {

  // db.articles.find{{}}
  // articleController.then(function(res){
  //     res.render('index', {articles: res});

  // })

  Article.find({})
    .then(function (response) {
      console.log("pulling from db");
      res.render('index', { articles: response });
    })
});

module.exports = router;
