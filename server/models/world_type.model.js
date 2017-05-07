var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worldTypeSchema = new Schema({
    description: String
});

module.exports = mongoose.model('WorldType', worldTypeSchema);