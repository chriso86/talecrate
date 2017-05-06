var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coverImageSchema = new Schema({
    data: Buffer,
    contentType: String,
    contentSize: Number
});

mongoose.model('cover_images', coverImageSchema);