const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const GIFCommentSchema = mongoose.Schema({
    gifId: { type: String },
    gifTitle: { type: String },
    userId: { type: integer },
    comment: { type: String},
    createdOn: { type: Date, default: Date.now }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('GifComment', GIFCommentSchema);