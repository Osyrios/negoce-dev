import {AboutMe} from "../AboutMe.jsx";
import {MainTitle} from "../Titles/MainTitle.jsx";
import {SectionTitle} from "../Titles/SectionTitle.jsx";
import {ProfessionalPath} from "../ProfessionalPath.jsx";
import {SchoolPath} from "../SchoolPath.jsx";
import {ArrowToTheTop} from "../ArrowToTheTop.jsx";
import {Projects} from "../Projects.jsx";

// eslint-disable-next-line react/prop-types
export function Body(){

    return <div className="h-auto bg-gray-400">
            <div className="mx-2 p-2 md:mx-32 md:p-4 xl:mx-52 xl:p-8">
                <ArrowToTheTop/>
                <MainTitle title={"Développeur d'applications"} anchor={'aboutMe'}/>
                <SectionTitle title={"Qui suis-je ?"}/>
                <AboutMe/>
                <SectionTitle title={"Mes compétences"}/>
                <SectionTitle title={"Mes projets"} anchor={'projects'}/>
                <Projects/>
                <SectionTitle title={"Mon Parcours"} anchor={'path'}/>
                <ProfessionalPath/>
                <SectionTitle title={"Formations"}/>
                <SchoolPath/>
            </div>
        </div>
}