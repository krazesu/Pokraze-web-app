import mongoose from 'mongoose'

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    searchCount: {
        type: Number,
        required: true,
        default: 1
    }
})

export default mongoose.model('Pokemon', pokemonSchema)