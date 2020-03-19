var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    name: String,
    author: String
});

module.exports = mongoose.model('Todo', TodoSchema);