import { useState, useEffect, useContext } from "react"
import styles from './MyTeam.module.css'
import { AuthContext } from "../../../contexts/AuthContext";

import { getTeam } from "../../../services/api.service.js"

function MyTeam(){
    const {user, loading} = useContext(AuthContext);
    const [myTeam, setMyTeam] = useState([]);

    async function removePokemon(params) {
        return
    }    

    
    useEffect(() => {
        getTeam().then((result) => {
            setMyTeam(result)
        })
    }, [])

    return(
        <>
        <div className={`${styles.header}`}>
            <h2>MY TEAM</h2>
            <span className={`${styles.team_count}`}>
                    {`${user.team.length}`} / 6 Pokémon
            </span>
        </div>
        <div className={`${styles.grid}`}>
            {myTeam.map((pokemon) => {
                return (
                    <div className={`${styles.slot}`} key = {pokemon.name}>
                        <button
                            className={`${styles.poke_remove}`}
                            title = {'Remove'}
                            onClick={removePokemon}>
                            ✕
                        </button>
                        <img 
                            className={`${styles.poke_sprite}`}
                            src = {`${pokemon.sprites.front_default}`}
                        />
                        <div className={`${styles.poke_name}`}>{`${pokemon.name}`}</div>
                        <div className={`${styles.poke_id}`}>
                            #{String(pokemon.id).padStart(4, "0")}
                        </div>
                        <div className={`${styles.poke_types}`}>
                            { 
                                pokemon.types.map((types) => {
                                    return (<span 
                                            className={`${styles.type_badge} ${styles[types.type.name.toLowerCase()]}`} 
                                            key = {types.type.name}>
                                            {types.type.name}
                                        </span>)
                                })
                            }
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
}

export default MyTeam;