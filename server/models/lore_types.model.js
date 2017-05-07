var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loreTypeSchema = new Schema({
    description: String
});

module.exports = mongoose.model('LoreType', loreTypeSchema);