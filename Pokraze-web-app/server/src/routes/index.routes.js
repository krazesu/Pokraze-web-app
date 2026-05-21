/*
const express = require('express')

const trainerRoutes = require('./trainer.routes')
const pokemonRoutes = require('./pokemon.routes')
const authRoutes = require('./auth.routes')
*/
import express from 'express'

import trainerRoutes from './trainer.routes.js'
import pokemonRoutes from './pokemon.routes.js'
import authRoutes from './auth.routes.js'

const router = express.Router()

router.use('/trainers', trainerRoutes)
router.use('/pokemons', pokemonRoutes)
router.use('/auth', authRoutes)

export default router