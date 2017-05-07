var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
    title: String,
    body: String,
    genre: {
        type: Schema.ObjectId,
        ref: 'Genre'
    },
    cover_image: {
        type: Schema.ObjectId,
        ref: 'CoverImage'
    },
    audio_clips: {
        type: Schema.ObjectId,
        ref: 'AudioClip'
    }
});

module.exports = mongoose.model('Story', storySchema);