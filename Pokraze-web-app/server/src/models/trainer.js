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
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    team: {
        type:[{
            pokemonId:{
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }],
        validate: {
            validator: function(arr){
                return arr.length <= 6;
            }
        },
        default: []
    },
    favorites:{
        type:[{
            pokemonId:{
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }],
        validate: {
            validator: function(arr){
                return arr.length <= 3;
            }
        },
        default: []
    }
})

module.exports = mongoose.model('Trainer', trainersSchema)