import { useState} from "react";

function SearchBar({setPokemon, setDescription}){
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    
    async function handleSearch(query){
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if(!response.ok){
                throw new Error("Pokemon Not Found!"); 
            }

            const data = await response.json();
            setPokemon(data);
            
            const speciesRes = await fetch(data.species.url);
            
            const speciesData = await speciesRes.json();
            const entry = speciesData.flavor_text_entries.find(
                (e) => e.language.name === "en"
            );
            if(entry) setDescription(entry.flavor_text.replace(/\f/g, " "));
            
            console.log(entry.flavor_text.replace(/\f/g, " "));
        }
        catch{
          setError("Error Found!");
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