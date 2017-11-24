var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var characterSchema = new Schema({
    title: Number,
    first_name: String,
    last_name: String,
    hair_colour: String,
    eye_colour: String,
    height: String,
    weight: String,
    build_type: String,
    bio: String,
    background: String,
    personality: String,
    likes: String,
    dislikes: String,
    habits: [{
        is_bad_habit: Boolean,
        description: String
    }],
    Stories: [{
        type: Schema.ObjectId,
        ref: 'Story'
    }],
    family: [{
        type: Schema.ObjectId,
        ref: 'Character'
    }],
    cover_image: {
        type: Schema.ObjectId,
        ref: 'CoverImage'
    },
});

module.exports = mongoose.model('Character', characterSchema);