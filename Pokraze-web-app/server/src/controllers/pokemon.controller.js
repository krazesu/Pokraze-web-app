const pokemonServices = require('../services/pokemon.service')

const searchPokemon = async (req, res) => {
    try{
        const pokemonData = await pokemonServices.searchPokemon(req.params.pokemonName.toLowerCase())
        res.status(200).json(pokemonData)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const updateSearchCount = async (req, res) => {
    try{    
        await pokemonServices.updateSearchCount(req.params.addPokemonName.toLowerCase())
        res.status(201).json({message: `updated search for ${req.params.addPokemonName.toLowerCase()}`})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const getTopSearches = async (req, res) => {
    const topSearches = await Pokemon.find().sort({searchCount:-1}).limit(10)

    console.log(topSearches)
    res.status(200).json({topSearches})
}

module.exports = {
    searchPokemon,
    updateSearchCount, 
    getTopSearches
};