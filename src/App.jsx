import {Navbar} from "./Components/GlobalSections/Navbar.jsx";
import {Body} from "./Components/GlobalSections/Body.jsx"
//import {useEffect, useState} from "react";
function App() {

/*Scroll tracker for navbar changes
    const [scroll, setScroll] = useState(0)
    useEffect(()=>{
        const handler = () =>{
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', handler)
        return ()=>{
            removeEventListener('scroll', handler)
        }
    })
  */

  return <div>
    <Navbar />
    <Body scroll={scroll}/>
  </div>

}

export default App
