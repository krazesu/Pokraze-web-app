const express = require('express')
const router = express.Router()
const trainerController = require('../controllers/trainer.controller')
const protected = require('../middleware/auth.middleware')

//Get all trainers
router.get('/', trainerController.getAllTrainers);

//check username availability
router.get('/check-username/:username', trainerController.checkUsername)

//Get authenticated/logged in trainer profile
router.get('/profile', protected.authMiddleware, trainerController.getTrainer);

//add a pokemon to the team of logged in trainer
router.post('/addToTeam', protected.authMiddleware, trainerController.addToTeam)

//fetch trainer's team of pokemons
router.post('/getTeam', protected.authMiddleware, trainerController.getTeam)

//remove pokemon from team
router.post('/removeFromTeam', protected.authMiddleware, trainerController.removeFromTeam)

module.exports = router