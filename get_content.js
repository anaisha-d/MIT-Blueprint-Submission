function reqListener () {
    let doc = new JSDOM(this.responseText);
    let reader = new Readability(doc.window.document);
    let article = reader.parse();
    console.log(article.textContent);
}

let {Readability} = require('@mozilla/readability');
let {JSDOM} = require('jsdom');
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.theguardian.com/world/2022/feb/20/ukraine-claims-russian-bias-among-frontline-monitors-after-western-pull-out");
oReq.send();
