import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer/Footer.jsx';
import LoginCard from '../components/Login/LoginCard.jsx';

function Signup(){
    return(
        <div style={{minHeight: "100vh",display: "flex", flexDirection: "column"}}>
            <Navbar/>
            <div style={{padding: "2rem", display: "flex", flex: "1", alignItems: "center", justifyContent: "center"}}>
                 <LoginCard />
            </div>
            <Footer />
        </div>
    );
}

export default Signup