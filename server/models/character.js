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
        ref: 'stories'
    }],
    family: [{
        type: Schema.ObjectId,
        ref: 'characters'
    }],
    cover_image: {
        type: Schema.ObjectId,
        ref: 'cover_images'
    },
});

mongoose.model('characters', characterSchema);