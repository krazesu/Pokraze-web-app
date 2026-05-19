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

    if(trainer.team.includes(pokemon.pokemonName)){
        return trainer;
    }

    if(trainer.team.length >= 6){
        throw new Error("Team is already full");
    }
    else{
        trainer.team.push(pokemon.pokemonName);

        await trainer.save();

        return trainer;
    }   
}

const getTeam = async(trainerId) => {
    const trainer = await Trainer.findById(trainerId).select('team')

    const myTeam = await Promise.all(
        trainer.team.map(async (name) => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );

            return response.json()
        })
    )
    
    return myTeam;
}

const removeFromTeam = async(trainerId,pokemon) => {
        await Trainer.updateOne({_id: trainerId}, {$pull: {team: pokemon.name}})
        return(pokemon)
}

module.exports = {
    getAllTrainers, 
    getTrainer,
    checkUsername,
    addToTeam,
    getTeam,
    removeFromTeam
};