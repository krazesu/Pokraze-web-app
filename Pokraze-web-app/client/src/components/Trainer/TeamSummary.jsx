
import { useState, useContext, useEffect} from "react"
import { AuthContext } from "../../contexts/AuthContext";

function TeamSummary(){
    const {user, loading, logout} = useContext(AuthContext);

    return(
        <div className="card">
            <div className="card-label">
                📊 TEAM SUMMARY
            </div>

            <div className="info-row">
                <span className="info-key">
                    Team Size
                </span>
                <span  className="info-val accent">
                    {`${user.team.length}`} /6
                </span>
            </div>
            <div className="info-row">
                <span className="info-key">
                    Starter Pokemon
                </span>
                <span  className="info-val">
                    Pikachu
                </span>
            </div>
            <div className="info-row">
                <span className="info-key">
                    Region
                </span>
                <span  className="info-val">
                    {`${user.region}`}
                </span>
            </div>

            <div className="card-label" style={{'marginTop': '1.3rem'}}>
                ⭐ FAVOURITES
            </div>
            
            <div className="fave-grid">
                <div className="fave-chip">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
                    Pikachu
                </div>
                <div className= "fave-chip">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"/>
                    Charizard
                </div>
                <div className= "fave-chip">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png"/>
                    Torterra
                </div>
            </div>
        </div>
    );
}

export default TeamSummary