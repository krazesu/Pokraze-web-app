const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const protected = require('../middleware/auth.middleware')
const login = require('../middleware/loginLimiter.middleware')

//Login and authenticate a trainer
router.post('/login-trainer', authController.loginTrainer);

//Add one trainer to database
router.post('/register-trainer', authController.addTrainer);

//
router.get('/auth-trainer', protected.authMiddleware, authController.authenticateTrainer)

module.exports = router