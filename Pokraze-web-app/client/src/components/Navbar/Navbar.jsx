import styles from './Navbar.module.css'

import {useState} from "react"
import {Link, useLocation} from "react-router-dom"

function Navbar(){
    const {pathname} = useLocation();
    const hideSignup = ['/signup', '/trainerProfile'].includes(pathname);

    return(
        <div className={`${styles.container}`}>
            <Link to='/' style = {{textDecoration: "none"}}>
                <div className={`${styles.logo}`}> 
                    <p>Pokráze</p>
                </div>
            </Link>

            <div className ={`${styles.links}`}>        
                <Link to='/' style = {{textDecoration: "none"}}> 
                    <span className={`${styles.link}`}>Home</span>
                </Link>

                <Link to='/' style = {{textDecoration: "none"}}>
                    <span className={`${styles.link}`}>Pokemon</span>
                </Link>

                <Link to='/trainerProfile' style = {{textDecoration: "none"}}>
                    <span className={`${styles.link}`}>My Team</span>
                </Link>

                <Link to='/signup'>
                    {!hideSignup && <button className={`${styles.button}`}>Sign Up</button>}
                </Link>
            </div>
        </div>
    );
}

export default Navbar