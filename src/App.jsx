import {Navbar} from "./Components/GlobalSections/Navbar.jsx";
import {Body} from "./Components/GlobalSections/Body.jsx"
import {Footer} from "./Components/GlobalSections/Footer.jsx";
import {useEffect, useState} from "react";

function App() {

//Scroll tracker for navbar changes



  return <div className="bg-gray-400">
    <Navbar />
    <Body />
    <Footer/>
  </div>

}

export default App
