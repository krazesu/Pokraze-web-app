const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
    try{
        /**Password hashing**/
        const saltRounds = 10;

        //generate salt
        const salt = await bcrypt.genSalt(saltRounds);

        //hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(trainerData.password, salt)   
    
        //Create trainer object
        const trainer = {
            name: trainerData.name,
            username: trainerData.username,
            age: trainerData.age,
            password: hashedPassword,
            ...(trainerData.region && { region: trainerData.region })
        }

        newTrainer = new Trainer(trainer)
        return await newTrainer.save()
    }
    catch(err){
        console.error("Registering trainer error: ", err)
    }
}

module.exports = {
    getAllTrainers, 
    getTrainer,
    checkUsername,
    addTrainer
};