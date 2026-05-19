const Pokemon = require('../models/pokemon')

const searchPokemon = async (pokemonName) => {
    //fetch pokemon data from pokemon API
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
        throw new Error("Pokemon Not Found!");
    }

    //get pokemon object
    const pokemon = await response.json();

    //get the species data to get the description
    const speciesRes = await fetch(pokemon.species.url);
    const speciesData = await speciesRes.json();

    const entry = speciesData.flavor_text_entries.find(
        (e) => e.language.name === "en"
    );

    const description = entry
        ? entry.flavor_text.replace(/\f/g, " ")
        : "";

    //Update search count for that pokemon
    if(pokemon){
        await Pokemon.findOneAndUpdate(
            {name: pokemonName},
            {$inc:{searchCount: 1}},
            {upsert: true}
        )
    }

    // return pokemon object and description
    return {
        pokemon,
        description,
    };
}

module.exports = {
    searchPokemon
};