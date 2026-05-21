import authService from '../services/auth.service.js'
import { success, fail } from '../utils/response.utils.js'

const loginTrainer = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return fail(res, 400, "Username and password are required")
        }

        const token = await authService.loginTrainer(username, password);

        if (!token) {
            return fail(res, 401, "Invalid credentials")
        }

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict", // consider "lax" if frontend is separate domain
            maxAge: 24 * 60 * 60 * 1000
        }); 

        return success(res, 200, {}, "Login successful")

    } catch (err) {
        console.error("Login error:", err.message);
        return fail(res, 500, "internal server error")
    }
};

const logoutTrainer = async (req, res) => {
    try{
        res.clearCookie("token",{
            httplOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        })

        return success(res, 200, {}, "Logged out successfully");
    }
    catch(err){
        console.error("Logout error:", err.message);
        return fail(res, 500, "internal server error")
    }
}

const addTrainer = async (req, res) => {
    try{
        const newTrainer = await authService.addTrainer(req.body)
        return success(res, 201, {}, "Registered successfully")
    }
    catch(err){
        console.error("Failed to register:", err.message);
        return fail(res, 400, "internal server error")
    }
}

const authenticateTrainer = async (req, res) => {
    try{
        const authTrainer = await authService.authenticateTrainer(req.user.id)
        return success(res, 200, authTrainer, "Logged in")
    }
    catch(err){
        console.error("Failed to retrieve previous session:", err.message);
        return fail(res, 400, "internal server error")
    }
}

export default {
    loginTrainer,
    logoutTrainer,
    addTrainer,
    authenticateTrainer
}