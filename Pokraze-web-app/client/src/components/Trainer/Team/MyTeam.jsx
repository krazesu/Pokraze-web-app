
import styles from './MyTeam.module.css'

import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext";
import { NotifContext } from "../../../contexts/NotifContext.jsx";
import { getTeam, removeFromTeam, addToFavorites, removeFromFavorites } from "../../../services/api.service.js"

function MyTeam(){
    const {user, setUser} = useContext(AuthContext)
    const { showNotification } = useContext(NotifContext)
    const [myTeam, setMyTeam] = useState([])
    const [myFaves, setMyFaves] = useState([])
    const [fetching, setfetching] = useState(true)
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        getTeam().then((result) => {
            setMyTeam(result.team)
            setfetching(false)
        })
        .then(() => {
            setMyFaves(user.favorites)
        })
    }, [refresh, user])

    async function toggleFavorite(pokemonId, name){
        if(myFaves.some((member) => member.name === name)){
            const response = await removeFromFavorites(pokemonId, name);
            setUser(response)
        }
        else{
            const response = await addToFavorites(pokemonId, name);

            if(response.message === "full"){
                showNotification("⚠️ Could only add up to 3 favorites!", "warning")
            }
            else{
                setMyFaves([...myFaves, {"pokemonId": pokemonId, "name": name}])
                setUser(response)
            }
        }
    }

    async function handleRemovePokemon(name) {
        const updatedTrainer = await removeFromTeam(name);
        setUser(updatedTrainer)
        setRefresh((prev) => prev+1)
    }    

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
                            className={
                                myFaves.some((member) => member.name === pokemon.name)
                                ? `${styles.poke_fave} ${styles.faved}`
                                : `${styles.poke_fave}`
                            }
                            title = {'add to favorites'}
                            onClick = {() => toggleFavorite(pokemon.id, pokemon.name)}>
                             ★
                        </button>
                        <button
                            className={`${styles.poke_remove}`}
                            title = {'Remove'}
                            onClick={() => handleRemovePokemon(pokemon.name) }>
                            ✕
                        </button>
                        <img 
                            className={`${styles.poke_sprite}`}
                            src = {`${pokemon.sprites.front_default}`}
                        />
                        <div className={`${styles.poke_name}`}>{`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}</div>
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