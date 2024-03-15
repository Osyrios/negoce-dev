import {useEffect, useState} from "react";
import validateMark from '../../assets/pictos/validateMark.png'
export function SchoolPath()  {


    const degreesUnsorted = [
        {
            'degree': 'BAC STMG',
            'option': 'Finance',
            'school': 'Lycée Gérard de Nerval',
            'city': 'Soissons (02)',
            'obtainDate': 2014
        },
        {
            'degree': 'BTS Comptabilité et gestion',
            'option': '',
            'school': 'Lycée Gérard de Nerval',
            'city': 'Soissons (02)',
            'obtainDate': 2016
        },
        {
            'degree': "Bachelor developpeur d'application web",
            'option': 'Python',
            'school': 'STUDY',
            'city': 'Paris (75)',
            'obtainDate': 2024
        }
    ]

    function sortDegrees(a, b) {
        return b.obtainDate - a.obtainDate
    }

    let [degrees, setDegrees] = useState([])
    let [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResizing() {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResizing)

        return () => {
            removeEventListener('resize', handleResizing)
        }
    }, [])

    useEffect(() => {
        const sortedDegrees = screenWidth > 1023 ? degreesUnsorted : degreesUnsorted.sort(sortDegrees)
        setDegrees(sortedDegrees)
    }, [screenWidth])


    return <div className="flex flex-col sm:items-center lg:flex-row lg:items-start lg:justify-evenly font-robotoRegular">
            {degrees.map((degree)=>
                <div key={degree.degree} className="customCards mx-9 my-10 p-0.5 shadow-lg shadow-blue-600 hover:shadow-yellow-100 bg-gradient-to-br from-blue-600 to-yellow-400 hover:scale-105 transition ease-in-out delay-75 duration-200 sm:flex sm:flex-row sm:items-center sm:gap-7 lg:mx-2">
                    <div className="relative rounded-3xl p-3 text-wrap bg-gray-400">
                        <img src={validateMark}
                             alt="image d'un tick vert de validation"
                             className="validateMark absolute -top-4 -right-5 z-30"/>
                        <p className="diplomes text-center"></p>
                        <ul className="ms-10 sm:ms-0">
                            <li><span className="underline font-robotoItalic">Diplôme</span> :<br/> {degree.degree}</li>
                            <li><span className="underline font-robotoItalic">Option</span> : {degree.option ? degree.option : 'Aucune'}</li>
                            <li><span className="underline font-robotoItalic">Année d&apos;obtention</span> : {degree.obtainDate}</li>
                            <li><span className="underline font-robotoItalic">Ecole</span> : {degree.school}</li>
                            <li><span className="underline font-robotoItalic">Ville</span> : {degree.city}</li>
                        </ul>
                    </div>
                </div>
            )}
    </div>

}

//