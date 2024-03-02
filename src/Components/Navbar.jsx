import logo from '../assets/logo/logotransparentwhite.png'

export function Navbar() {

    return <>
        <nav className="border-gray-200 bg-blue-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <img src={logo} alt="logo Yassine Négoce" className="h-24"/>
                    <p className="capitalize font-bold text-white  text-3xl">yassine négoce</p>
                </div>

                <div className=" w-full md:block md:w-auto">
                    <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-blue-900 md:bg-blue-900 border-gray-700">
                        <li>
                            <a href="#"
                               className="block py-2 px-3 bg-blue-900 rounded md:bg-transparent md:p-2 text-white hover:bg-blue-950">Home</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 bg-blue-900 rounded md:bg-transparent md:p-2 text-white hover:bg-blue-950">About me</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 bg-blue-900 rounded md:bg-transparent md:p-2 text-white hover:bg-blue-950">My projects</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 bg-blue-900 rounded md:bg-transparent md:p-2 text-white hover:bg-blue-950">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

