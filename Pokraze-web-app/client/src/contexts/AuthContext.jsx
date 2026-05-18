import {createContext, useEffect, useState} from 'react'
import { getTrainerProfile } from "../services/api.service.js";
import { authTrainer } from "../services/auth.api.service.js";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const restorePreviousSession = async() => {
            const token = localStorage.getItem("token")
            
            if(!token){
                setLoading(false)
                return
            }
            
            const isAuthenticated = await authTrainer();

            if (isAuthenticated){
                const data = await getTrainerProfile();

                setUser(data)

                setLoading(false)
            }

            setLoading(false)
        }

        restorePreviousSession()
    }, []);

    const login = (data) => {
        localStorage.setItem("token", data.token)
        setUser(data.user)
    };
    
    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    };

    return (
        <AuthContext.Provider
            value ={{
                user,
                setUser,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}