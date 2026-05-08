import { useState , createContext} from "react";

//Import components
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrainerCard from './components/TrainerCard.jsx';
import Footer from './components/Footer.jsx';

export const PokemonContext = createContext();

function App() {
    //init states for pokemon and their description
    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState("");

  return(
    //Main content using components
    <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
      <Navbar/>
      <div style={{padding: "2rem", flex: "1"}}>
        <PokemonContext.Provider value={{pokemon,setPokemon, description, setDescription}}>
          <Hero />          
        </PokemonContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App
