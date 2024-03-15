import photoYassine from '../assets/photo-yassine.jpeg'

export function AboutMe(){
    return <>
        <div className="flex flex-col justify-center items-center gap-5 mt-5 mb-16 mx-7 md:mx-0 md:justify-start md:gap-9 md:mt-16 md:mb-32 lg:flex-row xl:gap-32 font-robotoRegular">
                <img src={photoYassine}
                     alt="image avec le logo YN"
                     className="ellip rounded-full mt-4 h-1/3 w-1/3 text-center md:h-2/6 md:w-2/6 lg:h-2/5 lg:w-2/5 xl:h-1/5 xl:w-1/5 xl:ms-10"
                />
            <div className="flex flex-col items-center xl:w-1/2">
                    <h2 className=" font-robotoBold mb-3 text-lg"> Bienvenue sur mon portfolio en ligne !</h2>
                    <div className="py-2 text-justify text-sm">

                        <p className="pb-3">
                            Je m&apos;appelle Yassine j&apos;ai 28 ans et je suis passionné par le développement d&apos;applications !
                        </p>

                        <p className="pb-3">
                            Après 8 ans en tant que comptable, il est temps pour moi de quitter ce milieu qui ne me correspond pas.
                        </p>

                        <p className="pb-3">
                            Mi-2022, j&apos;ai entamé mon aventure dans la reconversion professionnelle afin de pouvoir enfin lier travaille et passion !
                        </p>

                        <p className="pb-3">
                            C&apos;est donc après une remise a la pratique du code que j&apos;ai débuté ma formation de développeur chez Studi !<br/>
                            Une formation suivie en parallèle de mon métier et de ma vie de famille et de laquelle je suis sorti diplômé d'un
                            bachelor &quot;Développeur de solutions digitales&quot; !
                        </p>

                        <p className="pb-3">
                            Me voilà donc titulaire d&apos;un bachelor développeur de solution digitale en pleine recherche d&apos;opportunités !<br/>
                            En attendant, je continue de m&apos;exercer et j&apos;ajouterais au fur et à mesure mes projets à ce site !
                        </p>

                        <p className="pt-2 text-center font-robotoItalic text-lg ">
                            Bonne visite !
                        </p>

                    </div>
            </div>
        </div>

    </>
}