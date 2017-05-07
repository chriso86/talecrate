var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: String,
    popularity_rating: Number
});

module.exports = mongoose.model('Genre', genreSchema);