import photoYassine from '../../assets/photos/photo-yassine.jpeg'
import {observer} from "../tools/observer.js";
import {useEffect} from "react";


export function AboutMe(){


     useEffect(()=>{
        document.querySelectorAll('.appearFromTop, .appearFromRight, .appearFromBottom, .appearFromLeft')
            .forEach((t)=>{
                observer.observe(t)
            })
        },[])


    return <>
        <div className=" flex flex-col justify-center items-center gap-5 mt-5 mb-16 mx-7 md:mx-0 md:justify-start md:gap-9 md:mt-16 md:mb-32 lg:flex-row xl:gap-32 font-robotoRegular">
                <img src={photoYassine}
                     alt="image avec le logo YN"
                     className="appearFromRight ellip rounded-full mt-4 h-1/3 w-1/3 text-center md:h-2/6 md:w-2/6 lg:h-2/5 lg:w-2/5 xl:h-1/5 xl:w-1/5 xl:ms-10 drop-shadow-2xl shadow-lg shadow-amber-50"
                />
            <div className="appearFromBottom flex flex-col items-center xl:w-1/2">
                <h2 className=" font-robotoBold mb-3 text-lg"> Bienvenue !</h2>
                <div className="py-2 text-justify text-sm">

                    <p className="pb-3">
                        Je m&apos;appelle Yassine j&apos;ai 28 ans et je suis passionné par le développement
                        d&apos;applications !
                    </p>

                    <p className="pb-3">
                        Après une formation de développeur chez Studi,<br/>
                        J'ai décroché un bachelor de developpeur d'applications !<br/>
                    </p>

                    <p className="pt-2 text-center font-robotoItalic text-lg ">
                        Bonne visite !
                    </p>

                </div>
            </div>
        </div>

    </>
}