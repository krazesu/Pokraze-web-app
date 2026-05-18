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

const addToTeam = async (trainerId, pokemon) => {
    const trainer = await Trainer.findById(trainerId)

    if(trainer.team.includes(pokemon.pokemonId)){
        return trainer;
    }

    if(trainer.team.length >= 6){
        throw new Error("Team is already full");
    }
    else{
        trainer.team.push(pokemon.pokemonId);

        await trainer.save();

        return trainer;
    }   
}

module.exports = {
    getAllTrainers, 
    getTrainer,
    checkUsername,
    addToTeam
};