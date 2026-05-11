const express = require('express')
const router = express.Router()
const trainerController = require('../controllers/trainer.controller')

//Getting all
router.get('/', trainerController.getAllTrainers);

//Getting one
router.get('/:username', trainerController.getTrainer);

//Creating one
router.post('/', trainerController.addTrainer);

module.exports = router