const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const commentSchema = mongoose.Schema({
    articleId: { type: String },
    userId: { type: String },
    articleTitle: { type: String },
    comment: { type: String },
    createdOn: { type: Date, default: Date.now }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Comment', commentSchema);