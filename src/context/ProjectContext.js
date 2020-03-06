import React, { useState, createContext } from "react";
import sortingImage from "../static/images/sorting-abelHodasz.png";
import sortingImageMobile from "../static/images/sorting-abelHodasz-mobile.png";
import soundVisualizationImage from "../static/images/soundVisualization.png";
import perlinNoiseImage from "../static/images/perlinNoisePaint.png";
import bouncingDvdImage from "../static/images/bouncingDvd.png";
import labirinthImage from "../static/images/labirinth.png";

import reactIcon from "../static/icons/react.svg";
import jsIcon from "../static/icons/js.png";
import p5Icon from "../static/icons/p5js.svg";

export const ProjectContext = createContext();

export const ProjectProvider = props => {
    const tech = {
        react: { shortName: "react", name: "React", icon: reactIcon },
        js: { shortName: "js", name: "JavaScript", icon: jsIcon },
        p5: { shortName: "p5", name: "p5.js", icon: p5Icon },

        git: { shortName: "git", name: "Git", icon: null },
        asp: { shortName: "asp", name: "ASP .NET", icon: null },
        dotnet: { shortName: "dotnet", name: ".NET", icon: null },
        jwt: { shortName: "jwt", name: "Jwt", icon: null },
        ef: { shortName: "ef", name: "Entity Framework", icon: null },
        material: { shortName: "material", name: "Material-ui", icon: null },
        sass: { shortName: "sass", name: "Sass", icon: null }
    };

    const projects = [
        {
            name: "Sorting Algorithms",
            id: "sorting-algorithms",
            featured: true,
            link: "https://sorting-hodabi.netlify.com/",
            gitHubLink: "https://github.com/CodecoolGlobal/sorting-abelHodasz",
            page: "/projects/sorting-algorithms",
            category: tech.js.shortName,
            logo: tech.js.icon,
            image: sortingImage,
            imageMobile: sortingImageMobile,
            technologies: [tech.sass, tech.js],
            description:
                "This page demonstrates how different sorting algorithms work, how long do they take. You can watch an animation of the sorts, and set the array's size and speed"
        },
        {
            name: "Sound Visualization",
            id: "sound-visualization",
            featured: false,
            link: "https://editor.p5js.org/hodabi/sketches/g3lbAqzO",
            page: "/projects/sound-visualization",
            logo: tech.p5.icon,
            category: tech.p5.shortName,
            image: soundVisualizationImage,
            imageMobile: soundVisualizationImage
        },
        {
            name: "Perlin Noise Paint",
            id: "perlin-noise-paint",
            featured: false,
            link: "https://editor.p5js.org/hodabi/sketches/C_L-ivFMD",
            page: "/projects/perlin-noise-paint",
            logo: tech.p5.icon,
            category: tech.p5.shortName,
            image: perlinNoiseImage,
            imageMobile: perlinNoiseImage
        },
        {
            name: "Labirinth Generator",
            id: "labirinth-generator",
            featured: false,
            link: "https://editor.p5js.org/hodabi/sketches/ej77xKyp7",
            page: "/projects/labirinth-generator",
            logo: tech.p5.icon,
            category: tech.p5.shortName,
            image: labirinthImage,
            imageMobile: labirinthImage
        },
        {
            name: "Bouncing Dvd Logo",
            id: "bouncing-dvd",
            featured: false,
            link: "https://editor.p5js.org/hodabi/sketches/ej77xKyp7",
            page: "/projects/bouncing-dvd",
            logo: tech.p5.icon,
            category: tech.p5.shortName,
            image: bouncingDvdImage,
            imageMobile: bouncingDvdImage
        }
    ];
    const [state, setState] = useState(projects);

    return (
        <ProjectContext.Provider value={[state, setState]}>
            {props.children}
        </ProjectContext.Provider>
    );
};
