const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    mobile: {
        type: String,
        require: true
    },
    is_mobile_verified: {
        type: String,
        default: ''
    },
    is_email_verified: {
        type: String,
        default: ''
    },
    token: {
        type: String,
        default: ''
    },
    date_create: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('user', user_schema);