function reqListener () {
    var doc = new JSDOM(this.responseText);
    let reader = new Readability(doc.window.document);
    let article = reader.parse();
    console.log(article.textContent);
}

var { Readability } = require('@mozilla/readability');
var {JSDOM} = require('jsdom');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.cnn.com/2022/02/18/politics/us-russia-ukraine-officials-list/");
oReq.send();
