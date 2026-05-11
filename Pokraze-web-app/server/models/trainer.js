const mongoose = require('mongoose');

const trainersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Trainer', trainersSchema)