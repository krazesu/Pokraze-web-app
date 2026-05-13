import { useState, useContext, useEffect} from "react"
import { AuthContext } from "../contexts/AuthContext";
import { getTrainerProfile } from "../api.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer/Footer.jsx';
import { useInRouterContext } from "react-router-dom";

function TrainerProfile(){
    const {user, loading, logout} = useContext(AuthContext);

    if(loading){
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
                                <span>{`${user.name}`}</span>
                            </h1>
                            <p className = "hero_sub">@pokemonMaster . Kanto Region</p>
                            <div className = "hero_pills">
                                <span className="pill">🎂 Age 10</span>
                                <span className="pill">🗺️ Kanto</span>
                                <span className="pill">🗓️ Joined April 2024</span>
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