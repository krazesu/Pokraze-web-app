const Pokemon = require('../models/pokemon')

const searchPokemon = async (pokemonName) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
        throw new Error("Pokemon not found");
    }

    const data = await response.json();
    return data;
}

const updateSearchCount = async (pokemonName) => {
    await Pokemon.findOneAndUpdate(
        {name: pokemonName},
        {$inc:{searchCount: 1}},
        {upsert: true}
    )
}

module.exports = {
    searchPokemon,
    updateSearchCount
};