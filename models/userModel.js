const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email:{
        type: String
    },
    username:{
        type: String
    },
    password: {
        type: String
    },
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'male'
    },
    birthdate:{
        type: String
    },
})

module.exports = mongoose.model('User', userSchema )