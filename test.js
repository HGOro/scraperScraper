const axios = require("axios")
const cheerio = require('cheerio')
let $;

axios.get('https://www.nytimes.com/section/us')
  .then(function (response) {
    //console.log(response.data);
    $ = cheerio.load(response.data);

    const element = $(`#stream-panel > div > ol > li`);

    //let text; 

    for (let i=1; i <= element.length; i++){
        console.log("###################################")
        text = $(`#stream-panel > div > ol > li:nth-child(${i}) > div > div.css-4jyr1y > a > h2`).text()
        console.log(text)
        const href = $(`#stream-panel > div > ol > li:nth-child(${i}) a`).attr('href')
        console.log(href)
        const title = $(`#stream-panel > div > ol > li:nth-child(${i}) h2`).text()
        console.log(title)
        const summary = $(`#stream-panel > div > ol > li:nth-child(${i}) p`).text()
        console.log(summary)
        console.log("###################################")
        //console.log(`${title}\n${summary}\n${href}`)
    }
    
    //text = $(`#stream-panel > div > ol > li:nth-child(${i}) > div > div.css-4jyr1y > a > h2`).text()
    //text = $("#stream-panel > div.css-13mho3u > ol > li:nth-child(2) > div > div.css-4jyr1y > a > h2").text()
    //console.log(text)
  })
  .catch(function (error) {
    console.log(error);
  });