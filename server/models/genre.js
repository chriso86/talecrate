var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: String,
    popularity_rating: Number
});

mongoose.model('genres', genreSchema);