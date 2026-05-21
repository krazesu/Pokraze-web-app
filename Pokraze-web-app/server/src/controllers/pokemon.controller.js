import pokemonServices from '../services/pokemon.service.js'

const searchPokemon = async (req, res) => {
    try{
        const name = req.query.name

        if(!name){
            return res.status(400).json({
                message: "Pokemon name is required"
            })
        }

        const pokemonData = await pokemonServices.searchPokemon(name.toLowerCase())
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

export default {
    searchPokemon,
    getTopSearches
};