const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Trainer = require('../models/trainer');

const loginTrainer = async(username, password) => {
    try{
        const user = await Trainer.findOne({username})

        if(!user){
            console.error({message: "Invalid username or password"});
            return null
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            console.error({message: "Invalid username or password"});
            return null
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )

        return({
            token,
            user
        })
    }
    catch(err){
        console.error({message: err.message})
        return null
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

const authenticateTrainer = async(id) => {
    const authTrainer = Trainer.findOne(id)
    if(authTrainer)
        return true;
    else
        return false;
}



module.exports = {
    loginTrainer,
    addTrainer,
    authenticateTrainer
}