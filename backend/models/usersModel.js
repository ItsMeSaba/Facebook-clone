const mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: {
        type: [Object]
    },
    date: {
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('User', usersSchema);