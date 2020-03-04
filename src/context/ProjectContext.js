import React, { useState, createContext } from "react";

export const ProjectProvider = createContext();

export default function ProjectContext(props) {
    const projects = [
        {
            featured: true,
            link: "https://sorting-hodabi.netlify.com/",
            gitHubLink: "https://github.com/CodecoolGlobal/sorting-abelHodasz",
            logo: "static/logos/sortin-abelHodasz.png",
            image: "static/images/sortin-abelHodasz.png"
        }
    ];
    const [state, setState] = useState({
        ...projects
    });

    return (
        <ProjectContext.Provider value={[state, setState]}>
            {props.children}
        </ProjectContext.Provider>
    );
}
