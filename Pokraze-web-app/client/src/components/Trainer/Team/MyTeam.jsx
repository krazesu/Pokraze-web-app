import { useState, useEffect, useContext } from "react"
import styles from './MyTeam.module.css'
import { AuthContext } from "../../../contexts/AuthContext";

import { getTeam, removeFromTeam } from "../../../services/api.service.js"

function MyTeam(){
    const {user, loading} = useContext(AuthContext);
    const [myTeam, setMyTeam] = useState([]);
    const [fetching, setfetching] = useState(true)

    async function handleRemovePokemon(name) {
        const removedPokemon = await removeFromTeam(name);
    }    

    useEffect(() => {
        getTeam().then((result) => {
            setMyTeam(result)
            setfetching(false)
        })
    }, [myTeam])

    return(
        <>
        <div className={`${styles.header}`}>
            <h2>MY TEAM</h2>
            <span className={`${styles.team_count}`}>
                    {`${myTeam.length}`} / 6 Pokémon
            </span>
        </div>
        <div className={`${styles.grid}`}>
            {myTeam.map((pokemon) => {
                return (
                    <div className={`${styles.slot}`} key = {pokemon.name}>
                        <button
                            className={`${styles.poke_remove}`}
                            title = {'Remove'}
                            onClick={() => handleRemovePokemon(pokemon.name)}>
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

        <div className={fetching? "loader-container-visible" : "loader-container-hide"}>
                <div className="loader"></div>
        </div>

        {myTeam.length===0 && !fetching &&<div className={`${styles.empty}`}>
            <h2>Your team is empty!</h2>
            <p>Add Pokémon to start building your team!</p>
        </div>}
        </>
    );
}

export default MyTeam;