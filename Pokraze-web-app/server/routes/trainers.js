const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')

//Getting all
router.get('/', async (req, res) => {
    try{
        const trainers = await Trainer.find()
        res.json({trainers})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});

//Getting one
//Creating one
router.post('/', async (req, res) => {
    const trainer = new Trainer({
        name: req.body.name,
        username: req.body.username,
        age: req.body.age,
        ...(req.body.region && { region: req.body.region })
    })

    try{
            const newTrainer = await subscriber.save()
            res.status(201).json(newTrainer)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
});
//Updating one
//Deleting one

module.exports = router