import styles from './Navbar.module.css'

import {useState, useContext} from "react"
import {Link, useLocation} from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext'

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
                    <span className={`${styles.link}`}>Home</span>
                </Link>

                <Link to='/' style = {{textDecoration: "none"}}>
                    <span className={`${styles.link}`}>Pokemon</span>
                </Link>

                <Link to={
                        user? '/trainerProfile': '/login'
                    } 
                
                    style = {{textDecoration: "none"}}>
                    <span className={`${styles.link}`}>My Team</span>
                </Link>

                {!hideSignup &&
                <Link to='/signup' style = {{textDecoration: "none"}}>
                    <button className={`${styles.button}`}>Sign Up</button>
                </Link>
                }

                {pathname === '/trainerProfile' || user?
                <Link to='/login' style = {{textDecoration: "none"}}>
                    <button className={`${styles.button}`} onClick={logout}>
                        <img src="../../public/logout_icon.png" className={`${styles.icon}`}/>
                        Log Out
                    </button>
                </Link>: null
                }
            </div>
        </div>
    );
}

export default Navbar