var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areaSchema = new Schema({
    name: String,
    description: String,
    type: {
        type: Schema.ObjectId,
        ref: 'area_types'
    },
    cover_image: {
        type: Schema.ObjectId,
        ref: 'cover_images'
    },
    lore: [{
        type: Schema.ObjectId,
        ref: 'lore'
    }],
    characters: [{
        type: Schema.ObjectId,
        ref: 'characters'
    }],
    creatures: [{
        type: Schema.ObjectId,
        ref: 'creatures'
    }]
});

mongoose.model('areas', areaSchema);