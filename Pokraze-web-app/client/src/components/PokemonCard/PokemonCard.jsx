import styles from './PokemonCard.module.css'

import { AuthContext } from "../../contexts/AuthContext"
import {useContext, useEffect, useState} from 'react'
import {Link, useNavigate,useLocation} from "react-router-dom"

import { addToTeam} from "../../services/api.service.js"

function PokemonCard({pokemon, description}){
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    //if pokemon is undefined return nothing
    if(!pokemon) return null;

    //create object for pokemon type and color combinations
    const TYPE_COLORS = {
        fire:     { bg: "#FFEBE3", color: "#B03A20" },
        water:    { bg: "#E3F0FF", color: "#1A5FAD" },
        grass:    { bg: "#E6F5DC", color: "#2E6B10" },
        electric: { bg: "#FFF8DC", color: "#9A6C00" },
        psychic:  { bg: "#FFE4EF", color: "#A0295C" },
        ice:      { bg: "#E0F9F3", color: "#0D6B55" },
        dragon:   { bg: "#EDEAFF", color: "#3A309A" },
        dark:     { bg: "#2e2e2e", color: "#D3D1C7" },
        fairy:    { bg: "#FFE6F2", color: "#B0356A" },
        fighting: { bg: "#FFEBE3", color: "#B03A20" },
        poison:   { bg: "#F0E6FF", color: "#6A2DA0" },
        ground:   { bg: "#FFF3DC", color: "#8A5C00" },
        rock:     { bg: "#F0EDE6", color: "#5A5040" },
        bug:      { bg: "#EDFADE", color: "#3A6B10" },
        ghost:    { bg: "#EDE6FF", color: "#3D2A9A" },
        steel:    { bg: "#EAF0F5", color: "#3A5A6B" },
        flying:   { bg: "#E8F2FF", color: "#2A4A9A" },
        normal:   { bg: "#F0EDE6", color: "#5A5040" },
        };

    const types = pokemon.types.map((t) => t.type.name);
    const mainType = types[0];
    const theme = TYPE_COLORS[mainType] || { bg: "#f0f0f0", color: "#333" };

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
            await addToTeam(pokemon.name);
            alert(`added ${pokemon.name} to Team`);
        }
    }

    return(
        <div className={`${styles.card}`} style={{ "--card-bg": theme.bg, "--card-color": theme.color}}>
         
            <div className={`${styles.header}`}>
                <div className={`${styles.meta}`}>
                <span className={`${styles.number}`}>
                    #{String(pokemon.id).padStart(4, "0")}
                </span>
                <h2 className={`${styles.name}`}>{pokemon.name}</h2>
                <div className={`${styles.types}`}>
                    {types.map((type) => {
                    const tc = TYPE_COLORS[type] || { bg: "#eee", color: "#333" };
                    return (
                        <span
                        key={type}
                        className={`${styles.type_badge}`}
                        style={{ background: tc.bg, color: tc.color }}
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
                        className={`${styles.star_btn}`} 
                        title = {'Add to Team'}
                        onClick={handleAddToTeam}
                        style={{ background: theme.bg}}>
                        +
                    </button>
                </div>
            </div>

            {description && (
                <p className={`${styles.description}`}>{description}</p>
            )}
        </div>
    );
}

export default PokemonCard