import styles from './PokemonCard.module.css'

import NotifToast from '../Notification/NotifToast.jsx'

import { AuthContext } from "../../contexts/AuthContext"
import {useContext, useEffect, useState} from 'react'
import {Link, useNavigate,useLocation} from "react-router-dom"

import { addToTeam } from "../../services/api.service.js"

function PokemonCard({pokemon, description}){
    const [notify, setNotify] = useState(false)
    const [notification, setNotification] = useState("")
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    //if pokemon is undefined return nothing
    if(!pokemon) return null;

    const types = pokemon.types.map((t) => t.type.name);
    const mainType = types[0];

    const sprite =
    pokemon.sprites.other["official-artwork"]?.front_default ||
    pokemon.sprites.front_default;

    async function handleAddToTeam(){
        if (!user){
            navigate('login', {
                state:{
                    from: "/home"
                }
            });
        }
        else{
            const response = await addToTeam(pokemon.name);
            if(response === true){
                navigate('trainerProfile', {
                    state:{
                        from: "/home",
                        new: true
                    }
                });
            }
            else if(response.message === "exists"){
                setNotify(true)
                setNotification("⚠️ This Pokémon is already in your team!")
                setTimeout(()=> setNotify(false), 500)
            }
            
            else if(response.message === "full"){
                setNotify(true)
                setNotification("⚠️ Your team is full (6/6 Pokémon)")
                setTimeout(()=> setNotify(false), 500)
            }
        }
    }

    return(
        <>
        {notify && <NotifToast notification={notification}/>}
        <div className={`${styles.card} ${styles[mainType]}`}>
            <div className={`${styles.header}`}>
                <div className={`${styles.meta}`}>
                <span className={`${styles.number}`}>
                    #{String(pokemon.id).padStart(4, "0")}
                </span>
                <h2 className={`${styles.name}`}>{pokemon.name}</h2>
                <div className={`${styles.types}`}>
                    {types.map((type) => {
                    return (
                        <span
                        key={type}
                        className={`${styles.type_badge} ${styles[type]}`}
                        >
                        {type}
                        </span>
                    );
                    })}
                </div>
                </div>
                <div className={`${styles.sprite_wrap}`}>
                {sprite && (
                    <img
                    className={`${styles.sprite}`}
                    src={sprite}
                    alt={pokemon.name}
                    />
                )}
                </div>

                <div className={`${styles.favorite}`}>
                    <button 
                        className={`${styles.star_btn}  ${styles[mainType]}`} 
                        title = {'Add to Team'}
                        onClick={handleAddToTeam}
                        style ={{color:"#c5bdbd"}}>
                        +
                    </button>
                </div>
            </div>

            {description && (
                <p className={`${styles.description}`}>{description}</p>
            )}
        </div>
        </>
    );
}

export default PokemonCard