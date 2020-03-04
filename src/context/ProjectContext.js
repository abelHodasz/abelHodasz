import React, { useState, createContext } from "react";
import sortingImage from "../static/images/sorting-abelHodasz.png";
import sortingImageMobile from "../static/images/sorting-abelHodasz-mobile.png";
import sortingLogo from "../static/icons/sorting-abelHodasz.png";
export const ProjectContext = createContext();

export const ProjectProvider = props => {
    const projects = [
        {
            name: "Sorting Algorithms",
            id: "sorting-algorithms",
            featured: true,
            link: "https://sorting-hodabi.netlify.com/",
            gitHubLink: "https://github.com/CodecoolGlobal/sorting-abelHodasz",
            page: "/projects/sorting-algorithms",
            logo: sortingLogo,
            image: sortingImage,
            imageMobile: sortingImageMobile
        },
        {
            name: "Sorting Algorithms",
            id: 1,
            featured: true,
            link: "https://sorting-hodabi.netlify.com/",
            gitHubLink: "https://github.com/CodecoolGlobal/sorting-abelHodasz",
            page: "/projects/sorting-algorithms",
            logo: sortingLogo,
            image: sortingImage,
            imageMobile: sortingImageMobile
        },
        {
            name: "Sorting Algorithms",
            id: 2,
            featured: true,
            link: "https://sorting-hodabi.netlify.com/",
            gitHubLink: "https://github.com/CodecoolGlobal/sorting-abelHodasz",
            page: "/projects/sorting-algorithms",
            logo: sortingLogo,
            image: sortingImage,
            imageMobile: sortingImageMobile
        },
        {
            name: "Sorting Algorithms",
            id: 3,
            featured: true,
            link: "https://sorting-hodabi.netlify.com/",
            gitHubLink: "https://github.com/CodecoolGlobal/sorting-abelHodasz",
            page: "/projects/sorting-algorithms",
            logo: sortingLogo,
            image: sortingImage,
            imageMobile: sortingImageMobile
        }
    ];
    const [state, setState] = useState(projects);

    return (
        <ProjectContext.Provider value={[state, setState]}>
            {props.children}
        </ProjectContext.Provider>
    );
};
