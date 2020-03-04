import React from "react";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import "./Projects.css";

export default function Projects() {
    return (
        <div>
            <h1 className="title">Projects</h1>
            <div className="projects-container">
                <ProjectSlider />
            </div>
        </div>
    );
}
