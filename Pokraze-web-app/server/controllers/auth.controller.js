const authService = require('../services/auth.service')

const loginTrainer = async (req, res) => {
    try{
        const {username, password} = req.body
        const response = await authService.loginTrainer(username, password)

        res.json(response)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    loginTrainer
}