var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var audioClipSchema = new Schema({
    data: Buffer,
    contentType: String,
    contentSize: Number
});

module.exports = mongoose.model('AudioClip', audioClipSchema);