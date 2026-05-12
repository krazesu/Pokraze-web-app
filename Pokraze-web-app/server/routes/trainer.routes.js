const express = require('express')
const router = express.Router()
const trainerController = require('../controllers/trainer.controller')

//Get all trainers
router.get('/', trainerController.getAllTrainers);

//Get one trainer
router.get('/:username', trainerController.getTrainer);

//check username availability
router.get('/check-username/:username', trainerController.checkUsername)

//Add one trainer to database
router.post('/register-trainer', trainerController.addTrainer);

module.exports = router