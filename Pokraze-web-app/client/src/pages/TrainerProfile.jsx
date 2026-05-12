import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer/Footer.jsx';

function TrainerProfile(){
    return(
        <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
            <Navbar />
            <div style={{padding: "2rem", display: "flex", flex: "1", justifyContent: "center"}}>

            </div>
            <Footer />
        </div>
    );
}

export default TrainerProfile