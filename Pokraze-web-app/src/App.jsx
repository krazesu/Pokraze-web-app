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

  return(
    <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
      <Navbar/>
      <div style={{padding: "2rem", flex: "1"}}>
        <Hero />          
        <SearchBar setPokemon = {setPokemon} setDescription = {setDescription}/>
        <PokemonCard pokemon={pokemon} description={description} />
      </div>
      <Footer />
    </div>
  );
}

export default App
