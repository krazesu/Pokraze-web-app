const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemon.controller')

router.get('/search/:pokemonName', pokemonController.searchPokemon)

router.post('/:addPokemonName', pokemonController.updateSearchCount)

router.get('/topTen', pokemonController.getTopSearches)


module.exports = router