import { createContext, useState} from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from '../components/Footer/Footer.jsx';

export const PokemonContext = createContext();

function Home(){

    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState("");

    return(
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

export default Home