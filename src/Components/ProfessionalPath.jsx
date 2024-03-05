import logoWhite from '../assets/logo/logoWhite.png'
import {useState} from "react";

export function ProfessionalPath() {


    const jobs = [
        {
            'logo': logoWhite,
            'company': 'Rapp France',
            'sector': 'Publicité',
            'position': 'Comptable',
            'start': '2016',
            'end': '2018',
            'description': 'Description rapp france'
        },
        {
            'logo': logoWhite,
            'company': 'GroupM',
            'sector': 'Publicité',
            'position': 'Gestionnaire Médias',
            'start': '',
            'end': '2022',
            'description': 'Description GroupM'
        },
        {
            'logo': logoWhite,
            'company': 'Seregec',
            'sector': 'Cabinet comptable',
            'position': 'Comptable',
            'start': '',
            'end': '11/2022',
            'description': 'Description Seregec'
        },
        {
            'logo': logoWhite,
            'company': 'Focus Entertainment',
            'sector': 'Jeux Video',
            'position': 'Comptable',
            'start': '',
            'end': 'Today',
            'description': 'Description Focus Entertainment'
        }
    ]

    const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false)

    const showDescription = () => {
        setIsDescriptionDisplayed(!isDescriptionDisplayed)
    }

    return <div className='m-8 flex flex-col items-center gap-5 text-sm md:text-base md:m-14'>

                <div className="m-0 p-0 italic">
                    <input type="checkbox"
                           id="description"
                           name="description"
                           className="me-2"
                           onChange={showDescription}
                           checked={isDescriptionDisplayed}/>
                    <label htmlFor="descriiption">Afficher les decriptions</label>
                </div>

                <div className="md:flex-row md:flex flex flex-col items-center">
                {jobs.map((job) =>
                    <div className='w-1/4 flex flex-col items-center my-2' key={job.company}>
                        <div className=' hover:underline hover:font-bold flex flex-col'>
                            <img src={job.logo} alt="logo"
                                 className="w-10/12 self-center hover:opacity-80 hover:animate-bounce "/>
                            <div className='flex flex-row justify-between'>
                                <time>{job.start}</time>
                                <time>{job.end}</time>
                            </div>
                        </div>
                        <div className={isDescriptionDisplayed ? 'mb-4' : 'hidden'}>
                            {job.description}
                        </div>
                    </div>
                )}
                </div>
           </div>
}