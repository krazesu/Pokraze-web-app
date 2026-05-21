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
                    {user.team?.[0] ? (
                        <span className={styles.info_val}>
                            {user.team[0].name.charAt(0).toUpperCase() + user.team[0].name.slice(1)}
                        </span>
                        ) : (
                        <span style={{color: "#F44336"}}>
                            Your team is empty!
                        </span>
                    )}
            </div>

            <div className={`${styles.card_label}`} style={{'marginTop': '1.3rem'}}>
                ⭐ FAVOURITES
            </div>
            
            <div className={`${styles.fave_grid}`}>
                {user.favorites.map((pokemon) => {
                    return(<div
                            key = {pokemon.pokemonId}
                            className={`${styles.fave_chip}`}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonId}.png`}/>
                        {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}
                    </div>)
                })}
            </div>
        </div>
    );
}

export default TeamSummary