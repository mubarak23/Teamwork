const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    userId: {type: Number, required: true},
    body: {type: String, required: true}
});
articleSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Article', articleSchema);
