const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const GIFSchema = mongoose.Schema({
    title: { type: String },
    imageUrl: { type: String },
    userId: { type: integer },
    createdOn: { type: Date, default: Date.now }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Gif', GIFSchema);