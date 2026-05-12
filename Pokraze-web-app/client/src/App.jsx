import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { useState , createContext, useEffect} from "react";

//Import components
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import TrainerProfile from "./pages/TrainerProfile.jsx";

function App() {
  return(
    //Main content using components
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/trainerProfile" element={<TrainerProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
