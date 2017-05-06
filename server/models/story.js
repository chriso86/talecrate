var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
    title: String,
    body: String,
    genre: {
        type: Schema.ObjectId,
        ref: 'genres'
    },
    cover_image: {
        type: Schema.ObjectId,
        ref: 'cover_images'
    },
    audio_clips: {
        type: Schema.ObjectId,
        ref: 'audio_clips'
    }
});

mongoose.model('stories', storySchema);