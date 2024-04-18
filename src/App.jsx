import {Navbar} from "./Components/GlobalSections/Navbar.jsx";
import {Body} from "./Components/GlobalSections/Body.jsx"
import {Footer} from "./Components/GlobalSections/Footer.jsx";

function App() {

  return <div className="bg-background">
    <Navbar />
    <Body />
    <Footer anchor={"contacts"}/>
  </div>

}

export default App
