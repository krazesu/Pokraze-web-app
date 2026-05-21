import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Trainer from '../models/trainer.js'

const loginTrainer = async(username, password) => {
    try{
        const user = await Trainer.findOne({username})

        if(!user){
            return null
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return null
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )

        return(token)
    }
    catch(err){
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
            firstname: trainerData.firstname,
            lastname: trainerData.lastname,
            username: trainerData.username,
            password: hashedPassword,
            ...(trainerData.region && { region: trainerData.region })
        }

        const newTrainer = new Trainer(trainer)
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

export default {
    loginTrainer,
    addTrainer,
    authenticateTrainer
}