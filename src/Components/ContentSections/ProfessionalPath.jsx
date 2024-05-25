import logoGroupM from '../../assets/logo company/groupM.png'
import logoFocus from '../../assets/logo company/FocusEntertainment.png'
import logoRappFrance from '../../assets/logo company/rappFrance.jpg'
import logoSeregec from '../../assets/logo company/seregec.jpg'
import {useEffect, useState} from "react";
import {observer} from "../tools/observer.js";

export function ProfessionalPath() {

     useEffect(()=>{
        document.querySelectorAll('.appearFromTop, .appearFromRight, .appearFromBottom, .appearFromLeft')
            .forEach((t)=>{
                observer.observe(t)
            })
        },[])

    const jobs = [
        {
            'logo': logoRappFrance,
            'company': 'Rapp France',
            'sector': 'Publicité',
            'position': 'Comptable',
            'start': '2016',
            'end': '2018',
            'description': ''
        },
        {
            'logo': logoGroupM,
            'company': 'GroupM',
            'sector': 'Publicité',
            'position': 'Gestionnaire Médias',
            'start': '',
            'end': '2022',
            'description': ''
        },
        {
            'logo': logoSeregec,
            'company': 'Seregec',
            'sector': 'Cabinet comptable',
            'position': 'Comptable',
            'start': '',
            'end': '11/2022',
            'description': ''
        },
        {
            'logo': logoFocus,
            'company': 'Focus Entertainment',
            'sector': 'Jeux Video',
            'position': 'Comptable',
            'start': '',
            'end': "Aujourd'hui",
            'description': ''
        }
    ]

    const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false)

    const showDescription = () => {
        setIsDescriptionDisplayed(!isDescriptionDisplayed)
    }

    return <div className='m-4 flex flex-col items-center gap-5 text-sm md:text-base md:m-14'>

        <div className="appearFromBottom md:flex-row md:flex md:justify-between flex flex-col items-center md:my-10">
            {jobs.map((job) =>
                <div className='flex flex-col items-center my-2 ' key={job.company}>
                    <div className=' hover:underline hover:font-robotoBold font-robotoRegular flex flex-col justify-end hover:animate-bounce'>
                        <img src={job.logo} alt="logo d'entreprise" className="w-6/12 md:w-10/12 self-center hover:opacity-80 rounded-full" />
                        <div className='flex flex-row justify-between'>
                            <time>{job.start}</time>
                            <time>{job.end}</time>
                        </div>
                    </div>
                    <div className={isDescriptionDisplayed ? 'my-4 border-t-4 border-blue-900 text-sm' : 'hidden'}>
                        <ul className="font-robotoRegular">
                            <li className="font-robotoItalic text-center pt-1">{job.company}</li>
                            <li className="pt-1"><span className="underline">Secteur</span> :<br/>{job.sector}</li>
                            <li className="pt-1"><span className="underline">Poste</span> :<br/>{job.position}</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>

        <div className="appearFromLeft m-0 p-0 font-robotoItalic">
            <input type="checkbox"
                   id="description"
                   name="description"
                   className="me-2"
                   onChange={showDescription}
                   checked={isDescriptionDisplayed}/>
            <label htmlFor="description">Afficher les descriptions</label>
        </div>

    </div>
}