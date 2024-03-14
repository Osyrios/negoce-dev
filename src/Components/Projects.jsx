
export function Projects(){

    const projectList = [
        {
            "name" : "Negoce-Dev",
            "stack" : ["REACT", "HTML","CSS","JS", "Tailwind"],
            "link" : "#",
            "context" : "Portfolio (site actuel)"
        },
        {
            "name" : "Mercadona",
            "stack" : ["Python", "Flask","jinja2", "Bootstrap","PostgreSQL"],
            "link" : "https://mercadona-ul6bi.ondigitalocean.app/",
            "context" : "Examen bachelor développeur d'applications"
        },
        {
            "name" : "Karmine",
            "stack" : ["HTML", "CSS"],
            "link" : "https://negoce-dev-karmine.netlify.app/",
            "context" : "Copie du site Karmine.fr en utilisant uniquement HTML et CSS"
        },
        {
            "name" : "Projet S",
            "stack" : ["HTML", "CSS", "PHP"],
            "link" : "",
            "context" : "En cours..."
        },
        {
            "name" : "A venir",
            "stack" : [""],
            "link" : "",
            "context" : ""
        }
    ]

    return <div className="flex flex-col flex-wrap sm:items-center lg:flex-row lg:items-start lg:justify-evenly font-robotoRegular">
            {projectList.map((project)=>
                <div key={project.name} className="customCards  mx-9 my-10 p-0.5 shadow-lg shadow-blue-600 hover:shadow-green-800 bg-gradient-to-br from-blue-600 to-green-400 hover:scale-105 delay-75 duration-200 sm:flex sm:flex-row sm:items-center sm:gap-7 lg:mx-2">
                    <div className="customCardsContent rounded-3xl p-3 text-wrap bg-gray-400">
                        <p className="text-center"></p>
                        <ul className="ms-10 sm:ms-0">
                            <li><span className="underline font-robotoItalic">Nom</span> :<br/> <span className="ps-4">{project.name}</span></li>
                            <li className="text-wrap"><span className="underline font-robotoItalic">Context</span> :<br/> <span className="ps-4">{project.context}</span></li>
                            <li><span className="underline font-robotoItalic">Stack</span> :<br/>
                                <ul className="ps-4">
                                    {project.stack.map((tech)=>
                                        <li key={tech}>{tech}</li>
                                    )}
                                </ul>
                            </li>
                            <li><span className="underline font-robotoItalic">lien</span> :
                                <a href={project.link ? project.link : "#"} target="_blank" className="text-blue-600 font-robotoBold"> {project.link ? "Visiter le site" : "En cours de construction"}</a></li>
                        </ul>
                    </div>
                </div>
            )}
    </div>
}