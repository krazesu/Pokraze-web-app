const Trainer = require('../models/trainer');

const getAllTrainers = async () => {
    return await Trainer.find()
}

const getTrainer = async (id) => {
    return await Trainer.findById(id)
}

const checkUsername = async (trainerUsername) => {
    const trainer = await Trainer.findOne({username: trainerUsername})
    if(trainer){
        return false
    }
    else{
        return true
    }
}

module.exports = {
    getAllTrainers, 
    getTrainer,
    checkUsername
};