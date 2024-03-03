import logo from '../assets/logo/logotransparentwhite.png'

// eslint-disable-next-line react/prop-types
export function Navbar() {

        let navClass = "border-gray-200 bg-blue-900"
        let globalDivClass = "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        let leftDivClass = "flex items-center"
        let imageClass = "h-24"
        let textClass = "capitalize font-bold text-white  text-3xl"
        let rightDivClass = "w-full md:block md:w-auto"
        let ulClass = "font-bold flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse " +
            "md:mt-0 md:border-0  bg-blue-900 md:bg-blue-900 border-gray-700"
        let liClass = "block py-2 px-3 bg-blue-900 rounded md:bg-transparent md:p-2 text-white hover:bg-blue-950"


    return <>
        <nav className={navClass}>
            <div className={globalDivClass}>
                <div className={leftDivClass}>
                    <img src={logo} alt="logo Yassine Négoce" className={imageClass}/>
                    <p className={textClass}>yassine négoce</p>
                </div>

                <div className={rightDivClass}>
                    <ul className={ulClass}>
                        <li>
                            <a href="#"
                               className={liClass}>Accueil</a>
                        </li>
                        <li>
                            <a href="#"
                               className={liClass}>Qui suis-je ?</a>
                        </li>
                        <li>
                            <a href="#"
                               className={liClass}>Mon Parcours</a>
                        </li>

                        <li>
                            <a href="#"
                               className={liClass}>Mes projets</a>
                        </li>
                        <li>
                            <a href="#"
                               className={liClass}>Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

