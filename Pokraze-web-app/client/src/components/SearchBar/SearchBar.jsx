import styles from './SearchBar.module.css'

import { NotifContext } from '../../contexts/NotifContext.jsx'
import { useState, useContext } from "react";
import { searchPokemon } from "../../services/api.service.js";

function SearchBar({setPokemon, setDescription, setSearching}){
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");

    const {showNotification} = useContext(NotifContext)
    
    async function handleSearch(e){
        e.preventDefault();
        if(query){
            try{  
                setSearching(true)
                const {pokemon, description} = await searchPokemon(query.trim().toLowerCase())
                setSearching(false)
                setPokemon(pokemon)
                setDescription(description)
            }
            catch(err){
                showNotification("Search failed. Try again.", "error")
                setSearching(false)
            }
        }
        setQuery("")
    }

    return(
    <form className={`${styles.card}`} onSubmit={handleSearch}>
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