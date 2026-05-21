import styles from './Navbar.module.css'

import {useState, useContext} from "react"
import {Link, useLocation} from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext'
import logoutIcon from '../../assets/image/logout_icon.png';

function Navbar(){
    const {user ,logout} = useContext(AuthContext)
    const {pathname} = useLocation();
    const hideSignup = ['/signup', '/trainerProfile'].includes(pathname) || user;
    
    return(
        <div className={`${styles.container}`}>
            <Link to='/' style = {{textDecoration: "none"}}>
                <div className={`${styles.logo}`}> 
                    <p>Pokráze</p>
                </div>
            </Link>

            <div className ={`${styles.links}`}>        
                <Link to='/' style = {{textDecoration: "none"}}> 
                    <span 
                        className={`${styles.link}  
                        ${styles[pathname === "/"? "active":null]}`}>
                        Home
                    </span>
                </Link>

                <Link to='/pokemon' style = {{textDecoration: "none"}}>
                    <span
                        className={`${styles.link}  
                        ${styles[pathname === "/pokemon"? "active":null]}`}>
                        Pokemon
                    </span>
                </Link>

                <Link to={user? '/trainerProfile': '/login'} 
                    style = {{textDecoration: "none"}}>
                    <span
                        className={`${styles.link}  
                        ${styles[["/trainerProfile", "/signup", "/login"].includes(pathname)? "active":null]}`}>
                        My Team
                    </span>
                </Link>

                {!hideSignup &&
                <Link to='/signup' style = {{textDecoration: "none"}}>
                    <button className={`${styles.button}`}>Sign Up</button>
                </Link>
                }

                {pathname === '/trainerProfile' || user?
                <Link to='/login' style = {{textDecoration: "none"}}>
                    <button className={`${styles.button}`} onClick={logout}>
                        <img src={logoutIcon} className={`${styles.icon}`}/>
                        Log Out
                    </button>
                </Link>: null
                }
            </div>
        </div>
    );
}

export default Navbar