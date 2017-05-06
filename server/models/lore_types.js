var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loreTypeSchema = new Schema({
    description: String
});

mongoose.model('lore_types', loreTypeSchema);