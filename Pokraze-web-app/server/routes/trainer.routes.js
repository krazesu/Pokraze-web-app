const express = require('express')
const router = express.Router()
const trainerController = require('../controllers/trainer.controller')
const authMiddleware = require('../middleware/auth.middleware');

//Get all trainers
router.get('/', trainerController.getAllTrainers);

//check username availability
router.get('/check-username/:username', trainerController.checkUsername)

//Get one trainer profile
router.get('/profile', authMiddleware.authMiddleware, trainerController.getTrainer);

module.exports = router