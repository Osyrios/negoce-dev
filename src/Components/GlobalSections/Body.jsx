import {AboutMe} from "../ContentSections/AboutMe.jsx";
import {MainTitle} from "../Titles/MainTitle.jsx";
import {SectionTitle} from "../Titles/SectionTitle.jsx";
import {ProfessionalPath} from "../ContentSections/ProfessionalPath.jsx";
import {SchoolPath} from "../ContentSections/SchoolPath.jsx";
import {ArrowToTheTop} from "../ContentSections/ArrowToTheTop.jsx";
import {Projects} from "../ContentSections/Projects.jsx";
import {Skills} from "../ContentSections/Skills.jsx";

export function Body(){

    return <div className="h-auto bg-gray-400">
            <div className="mx-2 p-2 md:mx-32 md:p-4 xl:mx-52 xl:p-8">
                <ArrowToTheTop/>
                <MainTitle title={"Développeur d'applications"} />
                <AboutMe/>
                <SectionTitle title={"Mes compétences"} anchor={'skills'}/>
                <Skills/>
                <SectionTitle title={"Mes projets"} anchor={'projects'}/>
                <Projects/>
                <SectionTitle title={"Mon Parcours"} anchor={'path'} />
                <SchoolPath/>
                <SectionTitle title={"Formations"}/>
                <ProfessionalPath/>
            </div>
        </div>
}