var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worldTypeSchema = new Schema({
    description: String
});

mongoose.model('world_types', worldTypeSchema);