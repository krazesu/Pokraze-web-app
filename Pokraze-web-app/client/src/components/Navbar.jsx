import {useState} from "react"

function Navbar(){
    return(
        <div className="top-nav">
            <div className="logo"> 
                <h1>Pokráze</h1>
            </div>

            <div className = "nav-links">
                <a className="nav-link">Features</a>
                <a className="nav-link">Pokemon</a>
                <a className="nav-link">My Team</a>
                <button className="nav-signup-btn">Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar