
import {useState} from "react"
import SearchBar from './SearchBar.jsx';
import PokemonCard from "./PokemonCard.jsx";

function Hero(){
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

            <SearchBar/>
            <PokemonCard/>
        </div>
    );
}

export default Hero