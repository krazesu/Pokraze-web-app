import {useState} from "react"

function Navbar(){
    return(
        <div className="top-nav">
            <div className="logo"> 
                <h1>Pokráze</h1>
            </div>

            <div className = "nav-links">
                <a>Features</a>
                <a>Pokemon</a>
                <a>My Team</a>
                <button>Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar