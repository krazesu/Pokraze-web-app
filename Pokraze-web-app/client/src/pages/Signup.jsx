import Navbar from "../components/Navbar.jsx";
import SignupCard from "../components/SignupCard.jsx";
import TrainerCard from '../components/TrainerCard.jsx';
import Footer from '../components/Footer.jsx';

function Signup(){
    return(
        <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
            <Navbar/>
            <div style={{padding: "2rem", display: "flex", flex: "1", justifyContent: "center"}}>
                <SignupCard />   
            </div>
            <Footer />
        </div>
    );
}

export default Signup