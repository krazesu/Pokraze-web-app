import { createContext, useState} from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from '../components/Footer/Footer.jsx';
import Leaderboard from "../components/PokemonPage/Leaderboard.jsx";

export const PokemonContext = createContext();

function Pokemon(){
    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState("");

    return(
        <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
            <Navbar/>
            <div style={{padding: "2rem", flex: "1"}}>
                <Leaderboard/>
            </div>
            <Footer />
        </div>
    )
}

export default Pokemon