import styles from './SearchBar.module.css'

import { useState} from "react";
import { searchPokemon } from "../../api/pokemons.api.js";

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
        if(query) handleSearch(query.trim().toLowerCase());
        setQuery("")
    }

    return(
    <form className={`${styles.card}`} onSubmit={handleSubmit}>
        <input  className = {`${styles.searchBox}`} 
                id = "pokemonName"
                placeholder="Enter Pokemon Name"
                type="text"
                value = {query}
                onChange = {(e)=> setQuery(e.target.value)}>
        </input>
        <button className ={`${styles.button}`} type="submit">Search Pokemon</button>
    </form>
    );
}

export default SearchBar