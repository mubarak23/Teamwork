const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const articleSchema = mongoose.Schema({
    title: {type: String, require: true},
    body: {type: String, require: true}
});
articleSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Article', articleSchema);
