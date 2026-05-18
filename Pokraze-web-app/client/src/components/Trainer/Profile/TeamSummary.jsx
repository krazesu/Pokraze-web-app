import styles from './TrainerProfile.module.css'

import { useState, useContext, useEffect} from "react"
import { AuthContext } from "../../../contexts/AuthContext";

function TeamSummary(){
    const {user, loading, logout} = useContext(AuthContext);

    return(
        <div className={`${styles.card}`}>
            <div className={`${styles.card_label}`}>
                📊 TEAM SUMMARY
            </div>

            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Team Size
                </span>
                <span  className="info-val accent">
                    {`${user.team.length}`} /6
                </span>
            </div>
            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Starter Pokemon
                </span>
                <span  className={`${styles.info_val}`}>
                    Pikachu
                </span>
            </div>
            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Region
                </span>
                <span  className={`${styles.info_val}`}>
                    {`${user.region}`}
                </span>
            </div>

            <div className={`${styles.card_label}`} style={{'marginTop': '1.3rem'}}>
                ⭐ FAVOURITES
            </div>
            
            <div className={`${styles.fave_grid}`}>
                <div className={`${styles.fave_chip}`}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
                    Pikachu
                </div>
                <div className= {`${styles.fave_chip}`}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"/>
                    Charizard
                </div>
                <div className= {`${styles.fave_chip}`}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png"/>
                    Torterra
                </div>
            </div>
        </div>
    );
}

export default TeamSummary