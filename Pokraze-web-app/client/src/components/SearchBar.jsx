import { useState} from "react";
import { searchPokemon } from "../api.js";

function SearchBar({setPokemon, setDescription, setSearching}){
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    
    async function handleSearch(query){
        try{  
            setSearching(true)
            const {pokemon, description} = await searchPokemon(query)
            setSearching(false)
            setPokemon(pokemon)
            setDescription(description)
        }
        catch(err){
            setError(err.message)
            setSearching(false)
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
    </form>
    );
}

export default SearchBar