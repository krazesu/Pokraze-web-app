import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer/Footer.jsx';

function TrainerProfile(){
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
                                Ash
                                <span>Ketchum</span>
                            </h1>
                            <p className = "hero_sub">@pikachumaster . Kanto Region</p>
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