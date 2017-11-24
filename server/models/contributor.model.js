var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contributorSchema = new Schema({
    title: Number,
    first_name: String,
    last_name: String
});

module.exports = mongoose.model('Contributor', contributorSchema);