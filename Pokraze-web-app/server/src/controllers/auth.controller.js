const authService = require('../services/auth.service')

const loginTrainer = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 1. Validate input early
        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        // 2. Authenticate user
        const token = await authService.loginTrainer(username, password);

        // Expecting something like:
        // { token, user }
        if (!token) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // 3. Set cookie securely
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none", // consider "lax" if frontend is separate domain
            maxAge: 24 * 60 * 60 * 1000
        });

        // 4. Send useful response
        return res.status(200).json({
            message: "Login successful"
        });

    } catch (err) {
        console.error("Login error:", err);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

const logoutTrainer = async (req, res) => {
    try{
        res.clearCookie("token",{
            httplOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        })

        return res.status(200).json({ message: "Logged out successfully" });
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const addTrainer = async (req, res) => {
    try{
        const newTrainer = await authService.addTrainer(req.body)
        res.status(201).json(newTrainer)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const authenticateTrainer = async (req, res) => {
    try{
        const authTrainer = await authService.authenticateTrainer(req.user.id)
        res.status(200).json(authTrainer)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    loginTrainer,
    logoutTrainer,
    addTrainer,
    authenticateTrainer
}