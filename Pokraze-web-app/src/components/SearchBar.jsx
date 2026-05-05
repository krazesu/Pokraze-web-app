import { useState } from "react";

function SearchBar({search}){
    const [query, setQuery] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        search(query.trim().toLowerCase());
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