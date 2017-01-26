const manga = require('./model');

module.exports = function (chapter, links) {
    var newChap = {
        chap: chapter,
        images: links
    };
    return new Promise((fulfill, reject) => {
        manga.findOne({ name: 'Shingeki_No_Kyojin' }, (err, data) => {
            if (err) {
                reject(`Error: ${err}`);
            }
            var flag = false;
            data.content.forEach(eps => {
                if (eps.chap == chapter) {
                    flag = true;
                }
            });

            if (flag === true) {
                reject('Chap existed');
            } else {
                data.content.push(newChap);
                data.save((err) => {
                    if (err)
                        reject(`Error when add data: ${err}`);
                });
                fulfill(`Success: chap ${chapter}`);
            }
        });
    });
}