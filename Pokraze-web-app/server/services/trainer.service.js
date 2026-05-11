const Trainer = require('../models/trainer');

const getAllTrainers = async () => {
    return await Trainer.find()
}

const getTrainer = async (trainerUsername) => {
    return await Trainer.find({username: trainerUsername})
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

const addTrainer = async (trainerData) => {
    const trainer = {
        name: trainerData.name,
        username: trainerData.username,
        age: trainerData.age,
        ...(trainerData.region && { region: trainerData.region })
    }

    newTrainer = new Trainer(trainer)
    return await newTrainer.save()
}

module.exports = {
    getAllTrainers, 
    getTrainer,
    checkUsername,
    addTrainer
};