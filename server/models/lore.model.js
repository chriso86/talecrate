var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loreSchema = new Schema({
    title: String,
    map_x: Number,
    map_y: Number,
    body: String,
    type: {
        type: Schema.ObjectId,
        ref: 'LoreType'
    },
    characters: [{
        type: Schema.ObjectId,
        ref: 'Character'
    }],
    cover_image: {
        type: Schema.ObjectId,
        ref: 'CoverImage'
    },
    audio_clips: {
        type: Schema.ObjectId,
        ref: 'AudioClip'
    }
});

module.exports = mongoose.model('Lore', loreSchema);