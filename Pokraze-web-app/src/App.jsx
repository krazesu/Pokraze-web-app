import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrainerCard from './components/TrainerCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import PokemonCard from "./components/PokemonCard.jsx";
import Footer from './components/Footer.jsx';

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState("");
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


  return(
    <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
      <Navbar/>
      <div style={{padding: "2rem", flex: "1"}}>
        <Hero />          
        <SearchBar search = {handleSearch}/>
        <PokemonCard pokemon={pokemon} description={description} />
      </div>
      <Footer />
    </div>
  );
}

export default App
