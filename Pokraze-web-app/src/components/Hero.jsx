
import {useState, useContext} from "react"
import SearchBar from './SearchBar.jsx';
import PokemonCard from "./PokemonCard.jsx";
import {PokemonContext} from "../App.jsx";

function Hero(){

    const {pokemon,setPokemon, description, setDescription} = useContext(PokemonContext);

    return(
        <div className="hero">
            <div className="hero-eyebrow"> 
                <span>YOUR POKÉMON COMPANION</span>
            </div>
            <div className="hero-title"> 
                <h2>Gotta search <span style={{color: "#E24B4A"}}>'em</span> all.</h2>
            </div>
            <div className="hero-sub"> 
                <span>Search any Pokémon instantly. 
                    View stats, types, and descriptions — 
                    all in one clean, modern card.</span>
            </div>

            <SearchBar setPokemon = {setPokemon} setDescription = {setDescription}/>
            <PokemonCard key={pokemon?.id} pokemon={pokemon} description={description} />
        </div>
    );
}

export default Hero