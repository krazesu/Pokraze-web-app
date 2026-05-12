const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

//Login and authenticate a trainer
router.post('/login-trainer', authController.loginTrainer);

module.exports = router