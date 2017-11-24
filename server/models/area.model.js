var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areaSchema = new Schema({
    name: String,
    description: String,
    type: {
        type: Schema.ObjectId,
        ref: 'AreaType'
    },
    cover_image: {
        type: Schema.ObjectId,
        ref: 'CoverImage'
    },
    lore: [{
        type: Schema.ObjectId,
        ref: 'Lore'
    }],
    characters: [{
        type: Schema.ObjectId,
        ref: 'Character'
    }],
    creatures: [{
        type: Schema.ObjectId,
        ref: 'Creature'
    }]
});

module.exports = mongoose.model('Area', areaSchema);