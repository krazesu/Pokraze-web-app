import Trainer from '../models/trainer.js';

const getAllTrainers = async () => {
    return await Trainer.find()
}

const getTrainer = async (id) => {
    const trainer =  Trainer.findById(id)

    if (!trainer) {
        throw new Error("TRAINER_NOT_FOUND");
    }

    return trainer;
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
     const trainer = await Trainer.findById(trainerId);

    if (!trainer) {
        throw new Error("TRAINER_NOT_FOUND");
    }

    const exists = trainer.team.some(
        member => member.name === pokemon.name
    );

    if (exists) {
        throw new Error("POKEMON_ALREADY_EXISTS");
    }

    if (trainer.team.length >= 6) {
        throw new Error("TEAM_FULL");
    }
    
    trainer.team.push({
        "pokemonId": pokemon.pokemonId , 
        "name": pokemon.name
    });
    
    await trainer.save();
    
    return trainer;  
}

const getTeam = async(trainerId) => {
    const trainer = await Trainer.findById(trainerId).select('team')

    if (!trainer) {
        throw new Error("TRAINER_NOT_FOUND");
    }

    if (!trainer.team || trainer.team.length === 0) {
        return [];
    }

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

export default {
    getAllTrainers, 
    getTrainer,
    checkUsername,
    addToTeam,
    getTeam,
    removeFromTeam,
    addToFavorites,
    removeFromFavorites
}; 