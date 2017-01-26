const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mangaSchema = new Schema({
    name: String,
    author: String,
    tag: Array,
    description: String,
    content: [{
        chap: Number,
        images: [String]
    }]
});

var manga = mongoose.model('manga', mangaSchema);

module.exports = manga;