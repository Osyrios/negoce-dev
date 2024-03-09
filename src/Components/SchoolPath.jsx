import {useEffect, useState} from "react";

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


    return <div className="flex flex-col sm:items-center lg:flex-row lg:items-start">
            {degrees.map((degree)=>
                <div key={degree.degree} className="text-wrap mx-9 my-10 sm:w-1/3 sm:flex sm:flex-row sm:items-center sm:gap-5 lg:mx-2">
                    <p className="diplomes text-center"></p>
                    <ul className="ms-10 sm:ms-0">
                        <li><span className="underline italic">Diplôme</span> :<br/> {degree.degree}</li>
                        <li><span className="underline italic">Option</span> : {degree.option ? degree.option : 'Aucune'}</li>
                        <li><span className="underline italic">Date d'obtention</span> : {degree.obtainDate}</li>
                        <li><span className="underline italic">Ecole</span> : {degree.school}</li>
                        <li><span className="underline italic">Ville</span> : {degree.city}</li>
                    </ul>
                </div>
            )}
    </div>

}