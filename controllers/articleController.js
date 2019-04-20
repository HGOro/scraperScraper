const axios = require("axios")
const cheerio = require('cheerio')

var Article = require('../models/article')

async function addArticle(req, res) {
    var article = new Article({title: 'The Title', href: 'http://nyt.com'})
    try{
        await article.save();
        res.send('saved')
    } catch(err){
        res.send(err)
    }
}

async function scrapeArticles(req, res){
    try{
        const response = await axios.get('https://www.nytimes.com/section/us')
        const $ = cheerio.load(response.data);
        const element = $(`#stream-panel > div > ol > li`);
        for (let i=1; i <= element.length; i++){
            console.log("###################################")
            //text = $(`#stream-panel > div > ol > li:nth-child(${i}) > div > div.css-4jyr1y > a > h2`).text()
            const href = $(`#stream-panel > div > ol > li:nth-child(${i}) a`).attr('href')
            const title = $(`#stream-panel > div > ol > li:nth-child(${i}) h2`).text()
            const summary = $(`#stream-panel > div > ol > li:nth-child(${i}) p`).text()
            console.log("###################################")
            var article = new Article({
                title: title,
                summary:summary,
                href: href
            })
            await article.save()
            res.send("yoooooo")
        }
    }catch(err){
        res.send(err)

    } 
}


module.exports = {
    addArticle,
    scrapeArticles
}