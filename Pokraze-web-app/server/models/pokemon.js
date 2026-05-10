const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    searchCount: {
        type: Number,
        required: true,
        default: 1
    },
    isBanned: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)