import express from 'express'

import authController from '../controllers/auth.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'
import loginLimiter from '../middleware/loginLimiter.middleware.js'

const router = express.Router()
//Login and authenticate a trainer
router.post(
    '/login', 
    authController.loginTrainer
);

//Add one trainer to database
router.post(
    '/register',
    authController.addTrainer
);

//Logout a trainer and clear token cookie 
router.post(
    '/logout',
    authMiddleware,
    authController.logoutTrainer
);


// authenticate if trainer is logged in
router.get('/me',
    authMiddleware,
    authController.authenticateTrainer
);

export default router