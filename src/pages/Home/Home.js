import React from "react";
import "./Home.css";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
export default function Home() {
    return (
        <div className="home">
            <h1>Ábel Hodász</h1>
            <div className="projects-container">
                <ProjectSlider />
            </div>
        </div>
    );
}
