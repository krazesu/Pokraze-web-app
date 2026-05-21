import express from 'express'

import trainerController from '../controllers/trainer.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = express.Router()

//Get all trainers
router.get(
    '/',
    trainerController.getAllTrainers
);

//check username availability
router.get(
    '/username/:username',
    trainerController.checkUsername
)

//Get authenticated/logged in trainer profile
router.get(
    '/me',
    authMiddleware,
    trainerController.getTrainer
);

//fetch trainer's team of pokemons
router.get(
    '/me/team',
    authMiddleware,
    trainerController.getTeam
)

//add a pokemon to the team of logged in trainer
router.post(
    '/me/team',
    authMiddleware,
    trainerController.addToTeam
)

//remove pokemon from team
router.delete(
    '/me/team',
    authMiddleware,
    trainerController.removeFromTeam
)

//add pokemon from favorites
router.post(
    '/me/favorites',
    authMiddleware,
    trainerController.addToFavorites
)

//remove pokemon from favorites
router.delete(
    '/me/favorites',
    authMiddleware,
    trainerController.removeFromFavorites
)

export default router