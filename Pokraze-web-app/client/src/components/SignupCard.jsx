import { useState } from 'react'

function SignupCard(){
    const [selectedRegion, setSelectedRegion] = useState("")

    return(
        <div className="signupcard-container">
            <p id = "signupcard-eyebrow">CREATE YOUR ACCOUNT</p>
            <h1 id = "signupcard-title"> Join the &nbsp;
                <span>'dex.</span>
            </h1>
            <p id = "signupcard-sub">Track your team, search any pokemon, 
                and show off your collection.</p>
            <div className="signupcard-form">
                <div className="signupcard-field">
                <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="signupcard-input" placeholder="Ash Ketchum"></input>
                </div>
                <div className="signupcard-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="signupcard-input" placeholder="@pokemonMaster"></input>
                </div>
                <div className="signupcard-field">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" className="signupcard-input" placeholder="10" min="1" max="120"></input>
                </div>
                <div className="signupcard-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="signupcard-input"placeholder="○○○○○○○"></input>
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
            <button className="signupcard-btn-submit">Start Your Journey→</button>
            <p className="signupcard-login-hint">Already have an account?
                &nbsp;<a href="" className="signupcard-login-hint">Log in</a>
            </p>
        </div>
    );
}

export default SignupCard