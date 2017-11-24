var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worldSchema = new Schema({
    name: String,
    age: String,
    description: String,
    type: {
        type: Schema.ObjectId,
        ref: 'WorldType'
    },
    cover_image: {
        type: Schema.ObjectId,
        ref: 'CoverImage'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    areas: [{
        type: Schema.ObjectId,
        ref: 'Area'
    }],
    characters: [{
        type: Schema.ObjectId,
        ref: 'Character'
    }],
    collaborators: [{
        type: Schema.ObjectId,
        ref: 'Contributor'
    }],
    creatures: [{
        type: Schema.ObjectId,
        ref: 'Creature'
    }]
});

module.exports = mongoose.model('World', worldSchema);