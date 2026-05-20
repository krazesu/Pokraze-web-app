import { createContext, useState, useContext} from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from '../components/Footer/Footer.jsx';
import NotifToast from '../components/Notification/NotifToast.jsx';

import { NotifContext } from "../contexts/NotifContext.jsx";

export const PokemonContext = createContext();

function Home(){
    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState("");
    const {notify, setNotify, notification, setNotification} = useContext(NotifContext)

    return(
        <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
            <Navbar/>
            {notify && <NotifToast notification={notification}/>}
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