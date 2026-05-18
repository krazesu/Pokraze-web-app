import { useState, useContext, useEffect} from "react"
import { AuthContext } from "../contexts/AuthContext";
//import { getTrainerProfile } from "../services/api.service.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer/Footer.jsx';
import { useInRouterContext } from "react-router-dom";

function TrainerProfile(){
    const {user, loading, logout} = useContext(AuthContext);

    if(loading || !user){
        return (
            <div className= "loader-container-visible">
                <div className="loader"></div>
            </div>
        )
    }

    return(
        <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
            <Navbar />
            <div style={{flex: "1"}}>
                <div className="hero">
                    <div className = "inner">
                        <img className = "trainer_sprite" src="../../public/trainer_sprite.png"/>
                        
                        <div className = "text">
                            <p className = "hero_eyebrow">TRAINER PROFILE</p>
                            <h1 className = "hero_name">
                                {`${user.name}`}
                            </h1>
                            <p className = "hero_sub">{`${user.username}`} . {`${user.region}`} Region</p>
                            <div className = "hero_pills">
                                <span className="pill">🎂 Age {`${user.age}`}</span>
                                <span className="pill">🗺️ {`${user.region}`}</span>
                                <span className="pill">🗓️ Joined 
                                    &nbsp;{`${new Date(user.joinDate).toLocaleString("en-US", {month: "short",})}`} 
                                    &nbsp;{`${new Date(user.joinDate).getFullYear()}`}</span>
                            </div>
                        </div>

                        <button className = "edit">✏️ Edit Profile</button>
                    </div>
                </div>
                
                <div className = "tabs_bar">
                    <button className="tab active">Profile</button>
                    <button className="tab">My Team</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default TrainerProfile