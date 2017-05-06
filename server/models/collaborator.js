var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var collaboratorSchema = new Schema({
    title: Number,
    first_name: String,
    last_name: String
});

mongoose.model('collaborators', collaboratorSchema);