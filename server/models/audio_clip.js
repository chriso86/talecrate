var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var audioClipSchema = new Schema({
    data: Buffer,
    contentType: String,
    contentSize: Number
});

mongoose.model('audio_clips', audioClipSchema);