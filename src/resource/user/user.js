const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    roleId: {type: Number, require: true},
    gender: { type: String, require: true },
    jobRole: { type: String },
    department: { type: String },
    address: {type: String }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);