var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loreSchema = new Schema({
    title: String,
    map_x: Number,
    map_y: Number,
    body: String,
    type: {
        type: Schema.ObjectId,
        ref: 'lore_types'
    },
    characters: [{
        type: Schema.ObjectId,
        ref: 'characters'
    }],
    cover_image: {
        type: Schema.ObjectId,
        ref: 'cover_images'
    },
    audio_clips: {
        type: Schema.ObjectId,
        ref: 'audio_clips'
    }
});

mongoose.model('lore', loreSchema);