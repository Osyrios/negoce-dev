import logoWhite from '../assets/logo/logoWhite.png'
import {useState} from "react";

export function ProfessionalPath(){

    const [isRappDisplayed, setIsRappDisplayed] = useState('false')

    const displaySection = (e) => {
        setIsRappDisplayed(!isRappDisplayed)

    }


    return <div className='m-8 flex flex-col items-center gap-5 text-sm md:text-base md:flex-row md:m-14' >

        <div className='w-1/4 flex flex-col item hover:underline hover:font-bold' onClick={displaySection}>
            <img src={logoWhite} alt="logo" className="w-10/12 self-center hover:opacity-80 md:hover:animate-bounce "/>
            <div className='flex flex-row justify-between'>
                <time>2016</time>
                <time>2018</time>
            </div>
        </div>

        <div className={!isRappDisplayed ? '' : 'hidden'}>
            rapp france 2016 a 2018
        </div>


        <div id='GROUPM' className='w-1/4 flex flex-col item hover:underline hover:font-bold'>
            <img src={logoWhite} alt="logo" className="w-10/12 self-center hover:opacity-80 md:hover:animate-bounce"/>
            <div className='flex flex-row justify-between'>
                <time></time>
                <time>03/2022</time>
            </div>
        </div>

        <div id='SEREGEC' className='w-1/4 flex flex-col item hover:underline hover:font-bold'>
            <img src={logoWhite} alt="logo" className="w-10/12 self-center hover:opacity-80 md:hover:animate-bounce"/>
            <div className='flex flex-row justify-between'>
                <time></time>
                <time>11/2022</time>
            </div>
        </div>

        <div id='FOCUS-ENTERTAINMENT' className='w-1/4 flex flex-col item hover:underline hover:font-bold'>
            <img src={logoWhite} alt="logo" className="w-10/12 self-center hover:opacity-80 md:hover:animate-bounce"/>
            <div className='flex flex-row justify-between'>
                <time></time>
                <time>Today</time>
            </div>
        </div>

    </div>
}