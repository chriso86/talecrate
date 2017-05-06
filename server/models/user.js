var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    title: Number,
    first_name: String,
    last_name: String
});

mongoose.model('users', userSchema);