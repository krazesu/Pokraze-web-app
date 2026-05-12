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

module.exports = {
    loginTrainer
}