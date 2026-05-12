const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemon.controller')

router.get('/search/:pokemonName', pokemonController.searchPokemon)

router.get('/topTen', pokemonController.getTopSearches)


module.exports = router