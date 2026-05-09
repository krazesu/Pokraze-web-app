const Pokemon = require('../models/pokemon')

Pokemon.updateSearchCount = async (req, res) => {
    const pokemonName = req.params.pokemonName.toLowerCase()

    try{    
        await Pokemon.findOneAndUpdate(
            { name: pokemonName},
            { $inc: {searchCount: 1}},
            { upsert: true}
        )
        res.status(201).json({message: `update search for ${pokemonName}`})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

Pokemon.getTopSearches = async (req, res) => {
    const topSearches = await Pokemon.find().sort({searchCount:-1}).limit(10)

    console.log(topSearches)
    res.status(200).json({topSearches})
}

module.exports = Pokemon