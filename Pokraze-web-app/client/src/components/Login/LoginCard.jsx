import styles from './LoginCard.module.css'

import {Link, useNavigate,useLocation} from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import { checkUsername,  getTrainerProfile } from '../../api/trainers.api.js'
import { addTrainer, loginTrainer} from '../../api/auth.api.js'
import { AuthContext } from "../../contexts/AuthContext";

function LoginCard(){
    const {user, setUser} = useContext(AuthContext);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [checkingUsername, setChecking] = useState(false)
    const [usernameAvailable, setAvailable] = useState(null)

    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault()

        const data = await loginTrainer(username, password);
        
        if(data){
            localStorage.setItem("token", data.token)
            setUser(data.user);
            
            alert("Login succesful!");
            navigate('/trainerProfile')
        }
        else{
            alert("Login FAILED!");
        }

        setUsername("")
        setPassword("")
    }

    return(
        <form className={`${styles.container}`} onSubmit={handleLogin}>
            <p className = {`${styles.eyebrow}`}>LOGIN TO YOUR TRAINER ACCOUNT</p>
            <h1 className = {`${styles.title}`}> WELCOME &nbsp;
                <span>BACK!</span>
            </h1>
            <p className = {`${styles.sub}`}>Track your team, search any pokemon, 
                and show off your collection.</p>

            <div className={`${styles.form}`}>
                <div className={`${styles.field}`}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="@pokemonMaster"
                        required
                        minLength={3}
                        maxLength={20}
                        className={`${styles.input} ${
                            usernameAvailable === true ? "available" : ""
                        } ${
                            usernameAvailable === false ? "taken" : ""
                        }`}
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={`${styles.field}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className={`${styles.input}`} placeholder="○○○○○○○" required
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className={`${styles.bottom_container}`}>
                <div className={`${styles.divider}`}></div>
                <button
                    className={`${styles.submit_btn}`}
                    type="submit">
                    Login→
                </button>
                 <p
                    className={`${styles.signup_hint}`}>
                    Don't have an account?&nbsp;

                    <Link to='/signup' style = {{textDecoration: "none"}}> 
                        <span className={`${styles.signup_hint}`}>Sign up</span>
                    </Link>
                </p>
            </div>
        </form>
    );
}

export default LoginCard