import logo from '../../assets/logo/logotransparentwhite.png'
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function Navbar() {

        let navClass = "bg-blue-900 "
        let globalDivClass = "flex flex-col flex-wrap justify-center items-center mx-auto p-4 xl:max-w-screen xl:flex-row xl:justify-between md:px-16"
        let leftDivClass = "flex items-center font-designer"
        let imageClass = "h-24 me-8"
        let textClass = "capitalize font-bold text-white  md:text-3xl"
        let rightDivClass = "font-designer w-full md:block md:w-auto"
        let ulClass = "font-bold flex flex-col p-4 mt-4 border rounded-lg bg-blue-900 border-gray-400" +
            "md:mt-0 md:p-0 md:border-0 md:flex-row md:space-x-8  "
        let liClass = "block py-2 px-3 bg-blue-900 rounded text-white hover:bg-blue-950 md:p-2 md:bg-transparent"



    const [isMenuOpen, setIsMenuOpen] = useState('false')
    function openMenu(){
            setIsMenuOpen(!isMenuOpen)
    }



    return <>
        <div className={navClass}>
            <div className={globalDivClass}>
                <div className={leftDivClass}>
                    <img src={logo} alt="logo Yassine Négoce" className={imageClass}/>
                    <p className={textClass}>yassine négoce</p>
                </div>


                <button type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={openMenu}>
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg className="w-5 h-5"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>


                <div className={`${rightDivClass} ${!isMenuOpen ? '' : 'hidden'}`}>
                    <ul className={ulClass}>
                        <li>
                            <a href="#"
                               className={liClass}>Accueil</a>
                        </li>
                        <li>
                            <a href="#aboutMe"
                               className={liClass}>A propos</a>
                        </li>
                        <li>
                            <a href="#path"
                               className={liClass}>Mon parcours</a>
                        </li>

                        <li>
                            <a href="#projects"
                               className={liClass}>Mes projets</a>
                        </li>
                        <li>
                            <a href="#contacts"
                               className={liClass}>Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

