import mongoose from 'mongoose'

const trainersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
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

export default mongoose.model('Trainer', trainersSchema)