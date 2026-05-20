import styles from './SignupCard.module.css'

import {Link, useNavigate, useLocation} from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import { checkUsername, getTrainerProfile } from "../../services/api.service.js"
import { addTrainer, authTrainer, loginTrainer} from "../../services/auth.api.service.js"
import { AuthContext } from "../../contexts/AuthContext"

function SignupCard(){
    const {user, setUser, loading, setLoading} = useContext(AuthContext);

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("")
    const [isCustomRegion, setCustomRegion] = useState(false)

    const [checkingUsername, setChecking] = useState(false)
    const [usernameAvailable, setAvailable] = useState(null)

    const navigate = useNavigate();

    async function handleSignup(e){
        e.preventDefault();

        if(usernameAvailable===false){
            alert("Username is already taken!");
            return
        }
        else{
            const trainer = {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
                region: selectedRegion
            }
            
            try{
                addTrainer(trainer)
                    .then(() => {
                        return loginTrainer(username, password);
                    })
                    .then(() => {
                        return getTrainerProfile();
                    })
                    .then((trainer) => {
                        setUser(trainer);
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.error(err);
                    });

                setFirstname("");
                setLastname("");
                setUsername("");
                setPassword("");
                setSelectedRegion("");
                setCustomRegion(false);
                
                navigate('/trainerProfile')
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    useEffect(() => {
        if(!username) return;

        const timeout = setTimeout(async () => {
            setChecking(true)

            try{
                setAvailable(await checkUsername(username))
            }
            catch(err){
                console.error(err)
            }

            setChecking(false);
        }, 500)

        return () => clearTimeout(timeout)
    }, [username])


    useEffect(() => {
        if (!username) {
            setAvailable(null);
            setChecking(false);
            return;
        }
    }, [username]);

    return(
        <form className={`${styles.container}`} onSubmit={handleSignup}>
            <p className = {`${styles.eyebrow}`}>CREATE YOUR ACCOUNT</p>
            <h1 className = {`${styles.title}`}> Join the &nbsp;
                <span>'dex.</span>
            </h1>
            <p className = {`${styles.sub}`}>Track your team, search any pokemon, 
                and show off your collection.</p>

            <div className={`${styles.form}`}>
                <div className={`${styles.field}`}>
                <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" className={`${styles.input}`} placeholder="Ash" required
                        value={firstname}
                        onChange = {(e) => setFirstname(e.target.value)}
                    ></input>
                </div>
                
                <div className={`${styles.field}`}>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" className={`${styles.input}`} placeholder="Ketchum" required
                        value = {lastname}
                        onChange = {(e) => setLastname(e.target.value)}
                    ></input>
                </div>

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
                    {checkingUsername && (
                        <p className="username-status checking">
                            Checking username
                        </p>
                    )}

                    {usernameAvailable === true && (
                        <p className="username-status available">
                            Username available
                        </p>
                    )}

                    {usernameAvailable === false && (
                        <p className="username-status taken">
                            Username already taken
                        </p>
                    )}
                </div>
                <div className={`${styles.field}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className={`${styles.input}`} placeholder="○○○○○○○" required
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    ></input>
                </div>
            </div>

            <div className={`${styles.field_full}`}>
                <label htmlFor="password">Region</label>
                <div className={`${styles.region}`}>
                    <button 
                        type = "button"
                        className={selectedRegion==="Kanto"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Kanto"), setCustomRegion(false)}}
                        data-region="Kanto"> 
                        Kanto
                    </button>
                    <button 
                        type = "button"
                        className={selectedRegion==="Johto"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Johto"), setCustomRegion(false)}}
                        data-region="Johto">
                        Johto
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Hoenn"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Hoenn"), setCustomRegion(false)}}
                        data-region="Hoenn">
                        Hoenn
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Sinnoh"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Sinnoh"), setCustomRegion(false)}}
                        data-region="Sinnoh">
                        Sinnoh
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Unova"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Unova"), setCustomRegion(false)}}
                        data-region="Unova">
                        Unova
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Kalos"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Kalos"), setCustomRegion(false)}}
                        data-region="Kalos">
                        Kalos
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Alola"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Alola"), setCustomRegion(false)}}
                        data-region="Alola">
                        Alola
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Galar"? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion("Galar"), setCustomRegion(false)}}
                        data-region="Galar">
                        Galar
                    </button>
                    <button
                        type = "button"
                        className={isCustomRegion? `${styles.region_btn} ${styles.selected}` : `${styles.region_btn}`}
                        onClick={() => {setSelectedRegion(""), setCustomRegion(true)}}
                        id ={`${styles.customRegion_btn}`}
                        data-region="Custom">
                        ✎ Custom
                    </button>
                    <div className={isCustomRegion? `${styles.custom_input_wrap_visible}`: `${styles.custom_input_wrap_hide}`}>
                        <input 
                            type="text" 
                            className= {`${styles.input}`}
                            id="customRegion"
                            placeholder="Name your region..."
                            required = {isCustomRegion}
                            value={selectedRegion}
                            onChange = {(e) => setSelectedRegion(e.target.value)}
                        ></input>
                    </div>
                </div>
            </div>
            <div className={`${styles.divider}`}></div>
            <button
                className={`${styles.submit_btn}`}
                type="submit">
                Start Your Journey→
            </button>
            <p
                className={`${styles.login_hint}`}>
                Already have an account?&nbsp;
                
                <Link to='/login' style = {{textDecoration: "none"}}> 
                    <span className={`${styles.login_hint}`}>Log in</span>
                </Link>
            </p>
        </form>
    );
}

export default SignupCard