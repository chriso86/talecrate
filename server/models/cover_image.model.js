var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coverImageSchema = new Schema({
    data: Buffer,
    contentType: String,
    contentSize: Number
});

module.exports = mongoose.model('CoverImage', coverImageSchema);