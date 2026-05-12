import { useState, useEffect } from 'react'
import { checkUsername, addTrainer } from '../api.js'

function SignupCard(){
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("")
    const [isCustomRegion, setCustomRegion] = useState(false)

    const [checkingUsername, setChecking] = useState(false)
    const [usernameAvailable, setAvailable] = useState(null)

    async function handleSubmit(e){
        e.preventDefault();

        if(usernameAvailable===false){
            alert("Username is already taken!");
            return
        }
        else{
            const trainer = {
                name: fullname,
                username: username,
                age: age,
                password: password,
                region: selectedRegion
            }
            
            try{
                const res = await addTrainer(trainer)
                setFullname("");
                setUsername("");
                setAge("");
                setPassword("");
                setSelectedRegion("");
                setCustomRegion(false);

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
        <form className="signupcard-container" onSubmit={handleSubmit}>
            <p id = "signupcard-eyebrow">CREATE YOUR ACCOUNT</p>
            <h1 id = "signupcard-title"> Join the &nbsp;
                <span>'dex.</span>
            </h1>
            <p id = "signupcard-sub">Track your team, search any pokemon, 
                and show off your collection.</p>

            <div className="signupcard-form">
                <div className="signupcard-field">
                <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="signupcard-input" placeholder="Ash Ketchum" required
                        value={fullname}
                        onChange = {(e) => setFullname(e.target.value)}
                    ></input>
                </div>
                <div className="signupcard-field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="@pokemonMaster"
                        required
                        minLength={3}
                        maxLength={20}
                        pattern="[A-Za-z0-9_]" 
                        className={`signupcard-input ${
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
                <div className="signupcard-field">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" className="signupcard-input" placeholder="10" min="1" max="120" required
                        value = {age}
                        onChange = {(e) => setAge(e.target.value)}
                    ></input>
                </div>
                <div className="signupcard-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="signupcard-input"placeholder="○○○○○○○" required
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    ></input>
                </div>
            </div>

            <div className="signupcard-field-full">
                <label htmlFor="password">Region</label>
                <div className="signupcard-region">
                    <button 
                        type = "button"
                        className={selectedRegion==="Kanto"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Kanto"), setCustomRegion(false)}}
                        data-region="Kanto"> 
                        Kanto
                    </button>
                    <button 
                        type = "button"
                        className={selectedRegion==="Johto"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Johto"), setCustomRegion(false)}}
                        data-region="Johto">
                        Johto
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Hoenn"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Hoenn"), setCustomRegion(false)}}
                        data-region="Hoenn">
                        Hoenn
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Sinnoh"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Sinnoh"), setCustomRegion(false)}}
                        data-region="Sinnoh">
                        Sinnoh
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Unova"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Unova"), setCustomRegion(false)}}
                        data-region="Unova">
                        Unova
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Kalos"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Kalos"), setCustomRegion(false)}}
                        data-region="Kalos">
                        Kalos
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Alola"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Alola"), setCustomRegion(false)}}
                        data-region="Alola">
                        Alola
                    </button>
                    <button
                        type = "button"
                        className={selectedRegion==="Galar"? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion("Galar"), setCustomRegion(false)}}
                        data-region="Galar">
                        Galar
                    </button>
                    <button
                        type = "button"
                        className={isCustomRegion? "signupcard-region-btn selected" : "signupcard-region-btn"}
                        onClick={() => {setSelectedRegion(""), setCustomRegion(true)}}
                        id ="customRegion-btn"
                        data-region="Custom">
                        ✎ Custom
                    </button>
                    <div className={isCustomRegion?"custom-input-wrap-visible": "custom-input-wrap-hide"}>
                        <input 
                            type="text" 
                            className="signupcard-input" id="customRegion"
                            placeholder="Name your region..."
                            required = {isCustomRegion}
                            value={selectedRegion}
                            onChange = {(e) => setSelectedRegion(e.target.value)}
                        ></input>
                    </div>
                </div>
            </div>
            <div className="signupcard-divider"></div>
            <button
                className="signupcard-btn-submit"
                type="submit">
                Start Your Journey→
            </button>
            <p
                className="signupcard-login-hint">
                Already have an account?&nbsp;
                <a href="" className="signupcard-login-hint">Log in</a>
            </p>
        </form>
    );
}

export default SignupCard