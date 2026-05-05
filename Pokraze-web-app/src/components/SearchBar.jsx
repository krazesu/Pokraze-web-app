function SearchBar(){

    async function fetchData(){
        try{
            const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if(!response.ok){
                throw new Error("Could not find pokemon!")
            }

            const data = await response.json();
            
            const pokemonSprite = document.getElementById("pokemonSprite");
            console.log(data);
            pokemonSprite.src = data.sprites.front_default;
            pokemonSprite.style = "display:block";
        }
        catch(error){
            console.error(error);
        }
    }

    return(
    <div className= "searchCard">
        <input className = "searchBox" id = "pokemonName" placeholder="Enter Pokemon Name" type="text"></input>
        <button className = "searchButton" onClick={fetchData}>Search Pokemon</button>
        <div className = "searchSprite">
            <img src={null} id="pokemonSprite" alt="Pokemon Sprite" style={{display: "none"}}></img>
        </div>
    </div>
    );
}

export default SearchBar