import logo from '../../assets/logo/logotransparentwhite.png'
import {useState} from "react";

export function Navbar() {

    let navClass = " bg-transparent w-full p-4 md:p-2 md:pb-0 md:sticky md:top-0 md:z-50 md:rounded-b-3xl"
    let globalDivClass = "flex flex-wrap md:flex-col justify-center items-center mx-auto px-4 max-w-screen xl:flex-row xl:justify-between md:px-16"
    let leftDivClass = "flex items-center font-designer md:hidden xl:flex"
    let imageClass = "h-12 me-6 md:h-20 md:me-6 xl:h-26 xl:me-8"
    let textClass = "capitalize font-bold text-white invisible md:visible  md:text-2xl"
    let rightDivClass = "bg-blue-900 font-designer rounded-b-lg w-full mt-4 md:mb-0 md:block md:w-auto"
    let ulClass = "font-bold flex flex-col p-4 mt-0 pt-0 border rounded-lg bg-blue-900 border-gray-400" +
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
                               className={liClass} onClick={openMenu}>Accueil</a>
                        </li>
                        <li>
                            <a href="#aboutMe"
                               className={liClass} onClick={openMenu}>A propos</a>
                        </li>
                        <li>
                            <a href="#projects"
                               className={liClass} onClick={openMenu}>Mes projets</a>
                        </li>

                        <li>
                            <a href="#path"
                               className={liClass} onClick={openMenu}>Mon parcours</a>
                        </li>
                        <li>
                            <a href="#contacts"
                               className={liClass} onClick={openMenu}>Contacts</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </>
}

