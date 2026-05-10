const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemon.controller')

router.get('/topTen', pokemonController.getTopSearches)

router.post('/:pokemonName', pokemonController.updateSearchCount)

router.get('/:pokemonName', pokemonController.getDetails)

router.post('/:pokemonName/ban', pokemonController.ban)

module.exports = router