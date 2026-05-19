import { useState, useEffect, useContext} from "react"
import { AuthContext } from "../contexts/AuthContext";

import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer/Footer.jsx';
import TrainerDetails from '../components/Trainer/Profile/TrainerDetails.jsx';
import TeamSummary from '../components/Trainer/Profile/TeamSummary.jsx';
import MyTeam from '../components/Trainer/Team/MyTeam.jsx';

import { useInRouterContext } from "react-router-dom";

function TrainerProfile(){
    const {user, loading, logout} = useContext(AuthContext);
    const [isProfile, setIsProfile] = useState(true);

    const location = useLocation();

    useEffect(() => {
        const newPokemon = location.state?.new ?? null;

        if (newPokemon) {
            setIsProfile(false);
        }
    }, [location.state]);

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
                                    &nbsp;{`${new Date(user.joinDate).getFullYear()}`}
                                </span>
                            </div>
                        </div>

                        <button className = "edit">✏️ Edit Profile</button>
                    </div>
                </div>
                
                <div className = "tabs_bar">
                    <button className={isProfile? "tab active": "tab"} onClick={() => setIsProfile(true)}>Profile</button>
                    <button className={isProfile? "tab": "tab active"} onClick={() => setIsProfile(false)}>My Team</button>
                </div>
                
                <div className="content" style={isProfile? null : { maxWidth: "1000px" }}>   
                    <div className={isProfile? "tab-panel active": "tab-panel"} id="panel-profile">
                            <div className="grid">
                                <TrainerDetails />
                                <TeamSummary />
                            </div>
                    </div>
                    <div className={isProfile? "tab-panel ": "tab-panel active"} id="panel-team">
                            <MyTeam />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default TrainerProfile