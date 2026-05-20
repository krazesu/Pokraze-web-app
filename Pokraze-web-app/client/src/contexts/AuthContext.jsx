import {createContext, useEffect, useState} from 'react'
import { getTrainerProfile } from "../services/api.service.js";
import { authTrainer, logoutTrainer } from "../services/auth.api.service.js";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const restorePreviousSession = async() => {
            const isAuthenticated = await authTrainer();

            if (isAuthenticated){
                const data = await getTrainerProfile();

                setUser(data)

                setLoading(false)
            }
        }

        restorePreviousSession()
    }, []);

    const login = (data) => {
        localStorage.setItem("token", data.token)
        setUser(data.user)
    };
    
    const logout = () => {
        logoutTrainer().then(() => {
            setUser(null)
        })
    };

    return (
        <AuthContext.Provider
            value ={{
                user,
                setUser,
                loading,
                setLoading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}