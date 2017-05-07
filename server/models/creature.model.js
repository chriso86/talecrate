var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var creatureSchema = new Schema({
    name: String,
    appearance: String,
    average_height: String,
    average_weight: String,
    temperament: String,
    background: String,
    build_type: String,
    personality: String,
    likes: String,
    dislikes: String,
    habits: [{
        is_bad_habit: Boolean,
        description: String
    }],
    place_of_origin: {
        type: Schema.ObjectId,
        ref: 'Area'
    },
    cover_image: {
        type: Schema.ObjectId,
        ref: 'CoverImage'
    }
});

module.exports = mongoose.model('Creature', creatureSchema);