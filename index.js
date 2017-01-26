const promise = require('bluebird');
const mongoose = require('mongoose');
const connectionUrl = 'mongodb://kuroba12138:kuroba12138@ds131139.mlab.com:31139/mangak';

var getLinks = require('./getLinks');
var insertLinks = require('./insertLinks');
var manga = require('./model');


mongoose.connect(connectionUrl);

var corouine = promise.coroutine(function* (chapter) {
    let links = yield getLinks(chapter);
    let result = yield insertLinks(chapter, links);
});

var count = 0;
for (let i = 1; i < 90; i++) {
    corouine(i)
        .then(function () {
            count++;
            console.log(`Finished: ${i} and its order is ${count}`);
        })
        .catch(err => {
            console.log(`Failing... ${err}`);
        });
}