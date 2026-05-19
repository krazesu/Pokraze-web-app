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

const getTopSearches = async (req, res) => {
    try{
        const leaderboard = await pokemonServices.getTopSearches();
        res.status(200).json(leaderboard)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    searchPokemon,
    getTopSearches
};