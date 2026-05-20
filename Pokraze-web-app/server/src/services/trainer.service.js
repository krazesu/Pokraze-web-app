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

    if(trainer.team.some(member => member.name === pokemon.name)){ 
        return {message: "exists"};
    }

    if(trainer.team.length >= 6){
        return {message: "full"};
    }
    else{
        trainer.team.push({
            "pokemonId": pokemon.pokemonId , 
            "name": pokemon.name
        });
        
        await trainer.save();

        return trainer;
    }   
}

const getTeam = async(trainerId) => {
    const trainer = await Trainer.findById(trainerId).select('team')

    const myTeam = await Promise.all(
        trainer.team.map(async (pokemon) => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );

            return response.json()
        })
    )
    
    return myTeam;
}

const removeFromTeam = async(trainerId,pokemon) => {
    const trainer = await Trainer.findByIdAndUpdate({_id: trainerId}, {$pull: {team: {name: pokemon.name}}})
    const newTeam = trainer.team.filter((member) => member.name !== pokemon.name)
    trainer.team = newTeam

    await Trainer.findByIdAndUpdate({_id: trainerId}, {$pull: {favorites: {name: pokemon.name}}})
    const newFavorites = trainer.favorites.filter((member) => member.name !== pokemon.name)
    trainer.favorites = newFavorites

    return(trainer)
}

const addToFavorites = async (trainerId, pokemon) => {
    const trainer = await Trainer.findById(trainerId)

    if(trainer.favorites.length >= 3){
        return {message: "full"};
    }
    else{
        trainer.favorites.push({
            "pokemonId": pokemon.pokemonId,
            "name": pokemon.name
        });

        await trainer.save();

        return trainer;
    } 
}

const removeFromFavorites = async (trainerId, pokemon) => {
    const trainer = await Trainer.findByIdAndUpdate({_id: trainerId}, {$pull: {favorites: {name: pokemon.name}}})
    const newFavorites = trainer.favorites.filter((member) => member.name !== pokemon.name)
    trainer.favorites = newFavorites

    return(trainer)
}

module.exports = {
    getAllTrainers, 
    getTrainer,
    checkUsername,
    addToTeam,
    getTeam,
    removeFromTeam,
    addToFavorites,
    removeFromFavorites
};