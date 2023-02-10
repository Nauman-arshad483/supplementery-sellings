const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: '',
        unique: true,
        enum: ['voip', 'graphic designer', 'merchant', 'afliate', 'affliate manager', 'customer service', 'complaince']
    }
});

module.exports = mongoose.model('users', userSchema);
