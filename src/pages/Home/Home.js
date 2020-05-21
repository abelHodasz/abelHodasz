import React, { useContext } from "react";

import "./Home.css";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import { useHistory } from "react-router-dom";

import { ProjectContext } from "../../context/ProjectContext";
import NeumorphicButton from "../../components/NeumorphicButton/NemorphicButton";

export default function Home() {
    const projects = useContext(ProjectContext)[0];
    const history = useHistory();
    return (
        <>
            <h1 className="title">Home</h1>
            <div className="home">
                <div className="home-introduction">
                    <div className="home-introduction-text">
                        <h2 className="home-introduction-header">
                            Front-end developer
                        </h2>
                        <p>Hello, my name is Ábel Hodász!</p>
                        <p>
                            I build high quality websites with a focus on great
                            user experience
                        </p>
                    </div>
                    <NeumorphicButton
                        onClick={() => {
                            history.push("/about-me");
                        }}
                    >
                        More About Me
                    </NeumorphicButton>
                </div>
                <div className="project-slider-container">
                    <ProjectSlider
                        projects={projects.filter((p) => p.featured)}
                    ></ProjectSlider>
                </div>
            </div>
        </>
    );
}
