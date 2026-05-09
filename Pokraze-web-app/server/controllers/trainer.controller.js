
const Trainer = require('../models/trainer');

Trainer.getAllTrainers = async (req, res) => {
    try{
        const trainers = await Trainer.find()
        res.json({trainers})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};

Trainer.getTrainer = async (req, res) => {
    try{
        const trainer = await Trainer.find({name: req.params.name})
        res.json({trainer})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};

Trainer.addTrainer = async (req, res) => {
    const trainer = new Trainer({
        name: req.body.name,
        username: req.body.username,
        age: req.body.age,
        ...(req.body.region && { region: req.body.region })
    })

    try{
        const newTrainer = await trainer.save()
        res.status(201).json(newTrainer)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = Trainer