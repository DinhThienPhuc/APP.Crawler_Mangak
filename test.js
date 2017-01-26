const fs = require('fs');
const promise = require('bluebird');

fs.readFile('./listChapters/chap1.txt', 'utf8', (err, content) => {
    if (err) {
        throw new Error(`Read File Fail: ${err}`)
    }
    var links = content.split(',');
    links.forEach(link => {
        console.log(link);
    });
});