import {AboutMe} from "./AboutMe.jsx";
import {MainTitle} from "./MainTitle.jsx";
import {SectionTitle} from "./SectionTitle.jsx";

// eslint-disable-next-line react/prop-types
export function Body(){

    return <div className="h-auto bg-gray-400">
            <div className="mx-52 p-8">
                <MainTitle/>
                <SectionTitle title={"Qui suis-je ?"}/>
                <AboutMe/>
                <SectionTitle title={"Mon Parcours"}/>
            </div>
        </div>
}