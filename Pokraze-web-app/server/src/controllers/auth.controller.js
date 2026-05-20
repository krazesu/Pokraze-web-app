const authService = require('../services/auth.service')

const loginTrainer = async (req, res) => {
    try{
        const {username, password} = req.body
        const jwt = await authService.loginTrainer(username, password)

        res.cookie("token", jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1 * 24 * 60 * 60 * 1000
        })

        res.json({message: "Logged in"})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const addTrainer = async (req, res) => {
    try{
        const newTrainer = await authService.addTrainer(req.body)
        res.status(201).json(newTrainer)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const authenticateTrainer = async (req, res) => {
    try{
        const authTrainer = await authService.authenticateTrainer(req.user.id)
        res.status(200).json(authTrainer)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    loginTrainer,
    addTrainer,
    authenticateTrainer
}