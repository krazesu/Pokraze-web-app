import {useState} from "react"
import {Link, useLocation} from "react-router-dom"


function Navbar(){
    const {pathname} = useLocation();
    const hideSignup = pathname === '/Signup';

    async function handleSignUp(){
        fetch('http://localhost:3000/message')
            .then(response =>{
                if(!response.ok){
                    throw new Error(`Server error: ${response.status} ${response.text}`)
                }
                else return response.json()
            })
            .then(data => {
                console.log(data.message)
            })
            .catch(e => {
                console.error(e)
            })
            
    }

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

                <Link to='/' style = {{textDecoration: "none"}}>
                    <span className="nav-link">My Team</span>
                </Link>

                <Link to='/Signup'>
                    {!hideSignup && <button className="nav-signup-btn" onClick={handleSignUp} style = {{marginLeft: "25px"}}>Sign Up</button>}
                </Link>
            </div>
        </div>
    );
}

export default Navbar