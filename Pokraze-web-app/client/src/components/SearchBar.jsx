import { useState} from "react";
import { searchPokemon } from "../api.js";

function SearchBar({setPokemon, setDescription}){
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    
    async function handleSearch(query){
        try{  
            const {pokemon, description} = await searchPokemon(query)
            setPokemon(pokemon)
            setDescription(description)
        }
        catch(err){
            setError(err.message)
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        document.getElementById("pokemonName").value = "";
        if(query) handleSearch(query.trim().toLowerCase());
    }

    return(
    <form className= "searchCard" onSubmit={handleSubmit}>
        <input  className = "searchBox" 
                id = "pokemonName"
                placeholder="Enter Pokemon Name"
                type="text"
                onChange = {(e)=> setQuery(e.target.value)}>
        </input>
        <button className = "searchButton" type="submit">Search Pokemon</button>
        <div className = "searchSprite">
            <img src={null} id="pokemonSprite" alt="Pokemon Sprite" style={{display: "none"}}></img>
        </div>
    </form>
    );
}

export default SearchBar