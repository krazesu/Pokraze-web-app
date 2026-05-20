const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const protected = require('../middleware/auth.middleware')
const login = require('../middleware/loginLimiter.middleware')

//Login and authenticate a trainer
router.post('/login-trainer', authController.loginTrainer);

//Logout a trainer and clear token cookie 
router.post('/logout-trainer', protected.authMiddleware, authController.logoutTrainer);

//Add one trainer to database
router.post('/register-trainer', authController.addTrainer);

//
router.get('/auth-trainer', protected.authMiddleware, authController.authenticateTrainer)

module.exports = router