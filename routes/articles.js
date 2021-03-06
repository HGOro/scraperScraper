var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController')

/* GET users listing. refers to /articles/* */
router.get('/create', articleController.addArticle)
router.get('/scrape', articleController.scrapeArticles)

module.exports = router;
