var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worldSchema = new Schema({
    name: String,
    age: String,
    description: String,
    type: {
        type: Schema.ObjectId,
        ref: 'world_types'
    },
    cover_image: {
        type: Schema.ObjectId,
        ref: 'cover_images'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'users'
    },
    areas: [{
        type: Schema.ObjectId,
        ref: 'areas'
    }],
    characters: [{
        type: Schema.ObjectId,
        ref: 'characters'
    }],
    collaborators: [{
        type: Schema.ObjectId,
        ref: 'collaborators'
    }],
    creatures: [{
        type: Schema.ObjectId,
        ref: 'creatures'
    }]
});

mongoose.model('worlds', worldSchema);