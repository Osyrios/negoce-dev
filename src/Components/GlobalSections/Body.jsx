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
                <MainTitle title={"Développeur d'applications"}/>
                <SectionTitle title={"Qui suis-je ?"} anchor={'aboutMe'}/>
                <AboutMe/>
                <SectionTitle title={"Mes compétences"}/>
                <Skills/>
                <SectionTitle title={"Mes projets"} anchor={'projects'}/>
                <Projects/>
                <SectionTitle title={"Mon Parcours"} anchor={'path'} />
                <ProfessionalPath/>
                <SectionTitle title={"Formations"}/>
                <SchoolPath/>
            </div>
        </div>
}