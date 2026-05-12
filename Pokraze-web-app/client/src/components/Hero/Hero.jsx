import styles from './Hero.module.css'

import {useState, useContext} from "react"
import SearchBar from '../SearchBar/SearchBar.jsx';
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import {PokemonContext} from "../../pages/Home.jsx";

function Hero(){
    //use context pokemon,description from app.jsx
    const {pokemon,setPokemon, description, setDescription} = useContext(PokemonContext);
    const [searching, setSearching] = useState(false)

    return(
        <div className={`${styles.hero}`}>
            <div className={`${styles.eyebrow}`}> 
                <span>YOUR POKÉMON COMPANION</span>
            </div>
            <div className={`${styles.title}`}> 
                <h2>Gotta search <span style={{color: "#E24B4A"}}>'em</span> all.</h2>
            </div>
            <div className={`${styles.sub}`}> 
                <span>Search any Pokémon instantly. 
                    View stats, types, and descriptions — 
                    all in one clean, modern card.</span>
            </div>

            <SearchBar setPokemon = {setPokemon} setDescription = {setDescription} setSearching = {setSearching}/>

            <div className={searching? "loader-container-visible" : "loader-container-hide"}>
                <div className="loader"></div>
            </div>

            {!searching && <PokemonCard pokemon={pokemon} description={description}/>}
            
        </div>
    );
}

export default Hero