import {AboutMe} from "./AboutMe.jsx";
import {MainTitle} from "./MainTitle.jsx";
import {SectionTitle} from "./SectionTitle.jsx";

// eslint-disable-next-line react/prop-types
export function Body(){

    return <div className="h-auto bg-gray-400 scroll-smooth">
            <div className="m-0 p-O lg:mx-52 lg:p-8">
                <MainTitle/>
                <SectionTitle title={"Qui suis-je ?"}/>
                <AboutMe/>
                <SectionTitle title={"Mon Parcours"}/>
            </div>
        </div>
}