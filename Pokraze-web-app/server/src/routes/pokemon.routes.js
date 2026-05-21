import express from 'express'
import pokemonController from '../controllers/pokemon.controller.js'

const router = express.Router()

router.get('/', pokemonController.searchPokemon)

router.get('/popular', pokemonController.getTopSearches)

export default router