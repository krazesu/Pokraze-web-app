import { useState, useEffect } from 'react'
import { checkUsername } from '../api.js'

function SignupCard(){
    const [selectedRegion, setSelectedRegion] = useState("")
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(1)
    const [password, setPassword] = useState("")
    const [region, setfullname] = useState("")

    const [checkingUsername, setChecking] = useState(false)
    const [usernameAvailable, setAvailable] = useState(null)

    async function handleSubmit(e){
        e.preventDefault();
        console.log(fullname);
        console.log(username);
        console.log(age);
        console.log(region);
    }

    useEffect(() => {
        if(!username) return;

        const timeout = setTimeout(async () => {
            setChecking(true)

            try{
                if(username == null) setAvailable(null)
                else setAvailable(await checkUsername(username))
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
                        onChange = {(e) => setFullname(e.target.value)}
                    ></input>
                </div>
                <div className="signupcard-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="@pokemonMaster" required
                        className={`signupcard-input ${
                            usernameAvailable === true ? "available" : ""
                        } ${
                            usernameAvailable === false ? "taken" : ""
                        }`}
                        onChange = {(e) => setUsername(e.target.value)}
                    ></input>
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
                        onChange = {(e) => setAge(e.target.value)}
                    ></input>
                </div>
                <div className="signupcard-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="signupcard-input"placeholder="○○○○○○○" required></input>
                </div>
            </div>

            <div className="signupcard-field-full">
                <label htmlFor="password">Region</label>
                <div className="signupcard-region">
                    <button className={selectedRegion==="Kanto"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Kanto")}
                     data-region="Kanto">Kanto</button>
                    <button className={selectedRegion==="Johto"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Johto")}
                     data-region="Johto">Johto</button>
                    <button className={selectedRegion==="Hoenn"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Hoenn")}
                     data-region="Hoenn">Hoenn</button>
                    <button className={selectedRegion==="Sinnoh"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Sinnoh")}
                     data-region="Sinnoh">Sinnoh</button>
                    <button className={selectedRegion==="Unova"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Unova")}
                     data-region="Unova">Unova</button>
                    <button className={selectedRegion==="Kalos"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Kalos")}
                     data-region="Kalos">Kalos</button>
                    <button className={selectedRegion==="Alola"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Alola")}
                     data-region="Alola">Alola</button>
                    <button className={selectedRegion==="Galar"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => setSelectedRegion("Galar")}
                     data-region="Galar">Galar</button>
                    <button className={selectedRegion==="custom"? "signupcard-region-btn selected" : "signupcard-region-btn"} onClick={() => {setSelectedRegion("custom")}}
                     id ="customRegion-btn" data-region="Custom">✎ Custom</button>
                    <div className={selectedRegion==="custom"?"custom-input-wrap-visible": "custom-input-wrap-hide"}>
                        <input type="text" className="signupcard-input" id="customRegion" placeholder="Name your region..."></input>
                    </div>
                </div>
            </div>
            <div className="signupcard-divider"></div>
            <button className="signupcard-btn-submit" type="submit">Start Your Journey→</button>
            <p className="signupcard-login-hint">Already have an account?
                &nbsp;<a href="" className="signupcard-login-hint">Log in</a>
            </p>
        </form>
    );
}

export default SignupCard