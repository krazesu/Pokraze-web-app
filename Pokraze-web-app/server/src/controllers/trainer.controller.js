import trainerService from '../services/trainer.service.js'
import { success, fail } from '../utils/response.utils.js'

const getAllTrainers = async (req, res) => {
    try{
        const trainers = await trainerService.getAllTrainers();
        return success(res, 200, trainers, "Fetched all trainers")
    }
    catch(err){
        console.error("failed to fetch trainers:", err.message);
        return fail(res, 500, "internal server error")
    }
};

const getTrainer = async (req, res) => {
    try{
        const trainer = await trainerService.getTrainer(req.user.id);

        return success(res, 200, {trainer}, "Fetched trainer profile")
    }
    catch(err){
        switch (err.message) {
            case "TRAINER_NOT_FOUND":
                return fail(res, 404, "Trainer not found");

            default:
                return fail(res, 500, "Internal server error");
        }
    }
};

const checkUsername = async (req, res) => {
    try{
        const isAvailable = await trainerService.checkUsername(req.params.username);
        return success(res, 200, {isAvailable}, "username verification successful")
    }
    catch(err){
        console.error("Failed to verify username:", err.message);
        return fail(res, 500, "internal server error")
    }
};

const addToTeam = async (req, res) => {
    try{
        const trainer = await trainerService.addToTeam(req.user.id,req.body);
        console.log(trainer)
        return success(res, 201, {trainer}, "Added to Team successfully")
    }
    catch(err){
        switch (err.message) {
            case "TRAINER_NOT_FOUND":
                return fail(res, 404, "Trainer not found");

            case "POKEMON_ALREADY_EXISTS":
                return fail(res, 409, "⚠️ This Pokémon is already in your team!");

            case "TEAM_FULL":
                return fail(res, 409, "⚠️ Your team is full (6/6 Pokémon)");

            default:
                return fail(res, 500, "Internal server error");
        }
    }
}

const getTeam = async (req, res) => {
    try{
        const myTeam = await trainerService.getTeam(req.user.id)
        return success(res, 200, {team: myTeam}, "Team fetched successfully")
    }
    catch(err){
        switch (err.message) {
            case "TRAINER_NOT_FOUND":
                return fail(res, 404, "Trainer not found");

            default:
                return fail(res, 500, "Internal server error");
        }
    }
}

const removeFromTeam = async (req, res) => {
    try{
        const trainer = await trainerService.removeFromTeam(req.user.id, req.body)
        res.status(201).json(trainer)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const addToFavorites = async (req, res) => {
    try{
        const updatedTrainer = await trainerService.addToFavorites(req.user.id, req.body)
        res.status(201).json(updatedTrainer )
    }
    catch(err){
        res.status(500).json({message: err.message})
    } 
}

const removeFromFavorites = async (req, res) => {
    try{
        const updatedTrainer = await trainerService.removeFromFavorites(req.user.id, req.body)
        res.status(201).json(updatedTrainer)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
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