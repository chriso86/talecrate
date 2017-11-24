var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    title: Number,
    first_name: String,
    last_name: String
});

module.exports = mongoose.model('User', userSchema);