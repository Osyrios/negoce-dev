import {AboutMe} from "../AboutMe.jsx";
import {MainTitle} from "../Titles/MainTitle.jsx";
import {SectionTitle} from "../Titles/SectionTitle.jsx";
import {ProfessionalPath} from "../ProfessionalPath.jsx";
import {SchoolPath} from "../SchoolPath.jsx";
import {ArrowToTheTop} from "../ArrowToTheTop.jsx";

// eslint-disable-next-line react/prop-types
export function Body(){

    return <div className="h-auto bg-gray-400">
            <div className="mx-2 p-2 md:mx-32 md:p-4 xl:mx-52 xl:p-8">
                <ArrowToTheTop/>
                <MainTitle title={"Développeur d'applications"}/>
                <SectionTitle title={"Qui suis-je ?"} anchor={'aboutMe'}/>
                <AboutMe/>
                <SectionTitle title={"Mon Parcours"}/>
                <ProfessionalPath anchor={'path'}/>
                <SectionTitle title={"Formations"}/>
                <SchoolPath/>
            </div>
        </div>
}