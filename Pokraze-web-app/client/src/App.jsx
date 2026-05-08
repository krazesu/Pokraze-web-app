import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { useState , createContext, useEffect} from "react";

//Import components
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
    //init states for pokemon and their description

  return(
    //Main content using components
    <BrowserRouter basename="/Pokraze-web-app">
      <Routes>
        <Route path="/" element={
              <Home/>
        }/>

        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
