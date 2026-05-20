
const trainerService = require('../services/trainer.service')

const getAllTrainers = async (req, res) => {
    try{
        const trainers = await trainerService.getAllTrainers();
        res.status(200).json({trainers})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};

const getTrainer = async (req, res) => {
    try{
        const trainer = await trainerService.getTrainer(req.user.id);
        res.status(200).json(trainer)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};


const checkUsername = async (req, res) => {
    try{
        const available = await trainerService.checkUsername(req.params.username);
        res.status(200).json({available})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};

const addToTeam = async (req, res) => {
    try{
        const updatedTrainer = await trainerService.addToTeam(req.user.id,req.body);
        res.status(201).json(updatedTrainer)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const getTeam = async (req, res) => {
    try{
        const team = await trainerService.getTeam(req.user.id)
        console.log(team)
        res.status(200).json(team)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const removeFromTeam = async (req, res) => {
    try{
        const removedPokemon = await trainerService.removeFromTeam(req.user.id, req.body)
        res.status(201).json(removedPokemon)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    getAllTrainers,
    getTrainer,
    checkUsername,
    addToTeam,
    getTeam,
    removeFromTeam
};