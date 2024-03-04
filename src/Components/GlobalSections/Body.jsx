import {AboutMe} from "../AboutMe.jsx";
import {MainTitle} from "../Titles/MainTitle.jsx";
import {SectionTitle} from "../Titles/SectionTitle.jsx";
import {ProfessionalPath} from "../ProfessionalPath.jsx";
import {SchoolPath} from "../SchoolPath.jsx";

// eslint-disable-next-line react/prop-types
export function Body(){

    return <div className="h-auto bg-gray-400 scroll-smooth">
            <div className="m-0 p-O lg:mx-52 lg:p-8">
                <MainTitle/>
                <SectionTitle title={"Qui suis-je ?"}/>
                <AboutMe/>
                <SectionTitle title={"Mon Parcours"}/>
                <ProfessionalPath/>
                <SchoolPath/>
            </div>
        </div>
}