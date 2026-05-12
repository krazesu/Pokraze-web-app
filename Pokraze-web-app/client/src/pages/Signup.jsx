import Navbar from "../components/Navbar/Navbar.jsx";
import SignupCard from "../components/Signup/SignupCard.jsx";
import Footer from '../components/Footer/Footer.jsx';

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