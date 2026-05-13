const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

//Login and authenticate a trainer
router.post('/login-trainer', authController.loginTrainer);

//Add one trainer to database
router.post('/register-trainer', authController.addTrainer);

module.exports = router