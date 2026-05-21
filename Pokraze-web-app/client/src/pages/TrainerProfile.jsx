import { useState, useEffect, useContext} from "react"
import { AuthContext } from "../contexts/AuthContext";

import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer/Footer.jsx';
import TrainerDetails from '../components/Trainer/Profile/TrainerDetails.jsx';
import TeamSummary from '../components/Trainer/Profile/TeamSummary.jsx';
import MyTeam from '../components/Trainer/Team/MyTeam.jsx';
import trainerSprite from '../assets/image/trainer_sprite.png'

import { useInRouterContext } from "react-router-dom";
import { getTrainerProfile } from "../services/api.service.js";

function TrainerProfile(){
    const {user, setUser, loading, logout} = useContext(AuthContext);
    const [isProfileTab, setisProfileTab] = useState(true);

    const location = useLocation();    

    useEffect(() => {
        const newPokemon = location.state?.new ?? null;

        if (newPokemon) {
            setisProfileTab(false);
        }
    }, [location.state]);

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
                        <img className = "trainer_sprite" src={trainerSprite}/>
                        
                        <div className = "text">
                            <p className = "hero_eyebrow">TRAINER PROFILE</p>
                            <h1 className = "hero_name">
                                {`${user.firstname}`} <strong>{`${user.lastname}`} </strong>
                            </h1>
                            <p className = "hero_sub">{`${user.username}`} . {`${user.region}`} Region</p>
                            <div className = "hero_pills">
                                <span className="pill">🗺️ {`${user.region}`}</span>
                                <span className="pill">🗓️ Joined 
                                    &nbsp;{`${new Date(user.joinDate).toLocaleString("en-US", {month: "short",})}`} 
                                    &nbsp;{`${new Date(user.joinDate).getFullYear()}`}
                                </span>
                            </div>
                        </div>

                        <button className = "edit">✏️ Edit Profile</button>
                    </div>
                </div>
                
                <div className = "tabs_bar">
                    <button className={isProfileTab? "tab active": "tab"} onClick={() => setisProfileTab(true)}>Profile</button>
                    <button className={isProfileTab? "tab": "tab active"} onClick={() => setisProfileTab(false)}>My Team</button>
                </div>
                
                <div className="content" style={isProfileTab? null : { maxWidth: "1000px" }}>   
                    <div className={isProfileTab? "tab-panel active": "tab-panel"} id="panel-profile">
                            <div className="grid">
                                <TrainerDetails />
                                <TeamSummary />
                            </div>
                    </div>
                    <div className={isProfileTab? "tab-panel ": "tab-panel active"} id="panel-team">
                            <MyTeam />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default TrainerProfile