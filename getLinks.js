const requestPromise = require('request-promise');
const fs = require('fs');

module.exports = function (chapter) {
    var options = {
        method: 'GET',
        uri: `http://truyentranhtuan.com/shingeki-no-kyojin-chuong-${chapter}/`
    }

    return new Promise(function (fulfill, reject) {
        return requestPromise(options)
            .then(res => {
                let idx = res.indexOf('slides_page_url_path');
                let firstBracket = idx + 25;
                var subStr = res.slice(firstBracket);
                let lastBracket = subStr.indexOf(']') + firstBracket;
                subStr = res.slice(firstBracket, lastBracket - 1);
                var links = subStr.split('\",\"');

                fulfill(links);
            })
            .catch(err => {
                reject(err);
            });
    });
}