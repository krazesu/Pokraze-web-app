import {useState} from "react"
import {Link, useLocation} from "react-router-dom"


function Navbar(){
    const {pathname} = useLocation();
    const hideSignup = ['/signup', '/trainerProfile'].includes(pathname);

    return(
        <div className="top-nav">
            <Link to='/' style = {{textDecoration: "none"}}>
                <div className="logo"> 
                    <h1>Pokráze</h1>
                </div>
            </Link>

            <div className = "nav-links">        
                <Link to='/' style = {{textDecoration: "none"}}> 
                    <span className="nav-link">Home</span>
                </Link>

                <Link to='/' style = {{textDecoration: "none"}}>
                    <span className="nav-link">Pokemon</span>
                </Link>

                <Link to='/trainerProfile' style = {{textDecoration: "none"}}>
                    <span className="nav-link">My Team</span>
                </Link>

                <Link to='/signup'>
                    {!hideSignup && <button className="nav-signup-btn" style = {{marginLeft: "25px"}}>Sign Up</button>}
                </Link>
            </div>
        </div>
    );
}

export default Navbar