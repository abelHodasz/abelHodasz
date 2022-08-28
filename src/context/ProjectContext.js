import React, { useState, createContext } from "react";
import sortingImage from "../static/images/sorting-abelHodasz.png";
import sortingImageMobile from "../static/images/sorting-abelHodasz-mobile.png";
import soundVisualizationImage from "../static/images/soundVisualization.png";
import perlinNoiseImage from "../static/images/perlinNoisePaint.png";
import bouncingDvdImage from "../static/images/bouncingDvd.png";
import labirinthImage from "../static/images/labirinth.png";
import basicCharacterImage from "../static/images/basicCharacterImage.png";
import spotify from "../static/images/spotifyMusicGuesser.png";
import spotifyMobile from "../static/images/spotifyMusicGuesserMobile.png";
import carcassTwwo from "../static/images/carcasstwwo.png";
import carcassTwwoMobile from "../static/images/carcassTwwoMobile.png";

import studyStud from "../static/images/studyStud.png";

import studyStudMobile from "../static/images/studyStudMobile.png";

import reactIcon from "../static/icons/react.svg";
import jsIcon from "../static/icons/js.png";
import tsIcon from "../static/icons/ts.png";
import p5Icon from "../static/icons/p5js.svg";
import sassIcon from "../static/icons/sass.svg";
import unityIcon from "../static/icons/unityIcon.png";
import aspIcon from "../static/icons/aspIcon.png";
import dotnetIcon from "../static/icons/dotnetIcon.png";
import gitIcon from "../static/icons/gitIcon.png";
import efIcon from "../static/icons/efIcon.png";
import materialIcon from "../static/icons/materialIcon.png";
import jwtIcon from "../static/icons/jwtIcon.png";
import nodeIcon from "../static/icons/nodeIcon.png";
import threeIcon from "../static/icons/three.ico";
import firebaseIcon from "../static/icons/firebaseIcon.png";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
    const tech = {
        react: { shortName: "react", name: "React", icon: reactIcon },
        js: { shortName: "js", name: "JavaScript", icon: jsIcon },
        js: { shortName: "ts", name: "TypeScript", icon: tsIcon },
        p5: { shortName: "p5", name: "p5.js", icon: p5Icon },

        git: { shortName: "git", name: "Git", icon: gitIcon },
        asp: { shortName: "asp", name: "ASP .NET", icon: aspIcon },
        dotnet: { shortName: "dotnet", name: ".NET", icon: dotnetIcon },
        jwt: { shortName: "jwt", name: "Jwt", icon: jwtIcon },
        ef: { shortName: "ef", name: "Entity Framework", icon: efIcon },
        material: {
            shortName: "material",
            name: "Material-ui",
            icon: materialIcon,
        },
        sass: { shortName: "sass", name: "Sass", icon: sassIcon },
        unity: { shortName: "unity", name: "Unity", icon: unityIcon },

        node: { shortName: "node", name: "Node.Js", icon: nodeIcon },
        three: { shortName: "three", name: "Three.js", icon: threeIcon },
        firebase: {shortName: "firebase", name: "Firebase", icon: firebaseIcon}
    };

    const projects = [
        {
            name: "Guess What",
            id: "spotify-guess-what",
            featured: true,
            page: "/projects/spotify-guess-what",
            category: tech.react.shortName,
            logo: tech.react.icon,
            image: spotify,
            imageMobile: spotifyMobile,
            technologies: [tech.react, tech.ts, tech.firebase],
            link: "https://spotify-guess-what.web.app/",
            description:
                "Guess what is a music guessing game. You can sign in with your spotify account and create and join lobbies. Once you've joined, each player picks a track from their spotify playlists. Then one by one the songs play and players try to guess the name of them.",
        },
        {
            name: "CarcassTwwo",
            id: "carcasstwwo",
            featured: true,
            gitHubLink: "https://github.com/abelHodasz/carcasstwwo-react",
            page: "/projects/carcasstwwo",
            category: tech.react.shortName,
            logo: tech.react.icon,
            image: carcassTwwo,
            imageMobile: carcassTwwoMobile,
            technologies: [tech.react, tech.material, tech.three],
            description:
                "Carcasstwwo is an online implementation of the famous boardgame Carcassonne. Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof. Having placed a tile, the player can then decide to place one of their meeples on one of the areas on it. When that area is complete, that meeple scores points for its owner.",
        },
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
                "This page demonstrates how different sorting algorithms work, how long do they take. You can watch an animation of the sorts, and set the array's size and speed",
        },
        {
            name: "Study stud",
            id: "study-stud",
            featured: true,
            gitHubLink: "https://github.com/dolezsariza/study-studs-react",
            page: "/projects/study-stud",
            category: tech.react.shortName,
            logo: tech.react.icon,
            image: studyStud,
            imageMobile: studyStudMobile,
            technologies: [
                tech.react,
                tech.material,
                tech.dotnet,
                tech.asp,
                tech.ef,
                tech.git,
            ],
            description:
                "This is a web application for students. You have to register/login to view the page. If you are logged in you can create groups of related topics. Post materials and comment on topics. It's an easy way for students to collect notes for a subject or topic.",
        },
        {
            name: "Basic Character Controll - Unity",
            id: "basic-character",
            featured: true,
            link: "https://basic-character-controll-unity.netlify.com/",
            page: "/projects/basic-character",
            category: tech.unity.shortName,
            logo: tech.unity.icon,
            image: basicCharacterImage,
            imageMobile: basicCharacterImage,
            technologies: [tech.unity],
            description:
                "With this little application, I got to know the basics of the Unity engine and how animation works in unity. Also I had a bit of fun drawing some pixel art.",
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
            imageMobile: soundVisualizationImage,
            technologies: [tech.p5],
            description:
                "When you click on the page, a song starts playing. This app visualizes the volume of the song in a nice way.",
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
            imageMobile: perlinNoiseImage,
            technologies: [tech.p5],
            description:
                "This is a paint app, that generates colors, baised on perlin-noise. When you release the mouseButton, a new color gets chosen. You can paint interesting patterns.",
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
            imageMobile: labirinthImage,
            technologies: [tech.p5],
            description:
                "This app is a very simple labirinth generator. It randomly choses a forward slash or a backwards slash for every spot, generating some amazing patterns.",
        },
        {
            name: "Bouncing Dvd Logo",
            id: "bouncing-dvd",
            featured: false,
            link: "https://editor.p5js.org/hodabi/sketches/i89GRFBz7",
            page: "/projects/bouncing-dvd",
            logo: tech.p5.icon,
            category: tech.p5.shortName,
            image: bouncingDvdImage,
            imageMobile: bouncingDvdImage,
            technologies: [tech.p5],
            description:
                "Everybody remembers old tv's screensavers. You were always waiting for the logo to bounce in the corner. But when it finally does...",
        },
    ];
    const [state, setState] = useState(projects);

    return (
        <ProjectContext.Provider value={[state, setState]}>
            {props.children}
        </ProjectContext.Provider>
    );
};
