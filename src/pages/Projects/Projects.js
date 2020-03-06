import React, { useContext } from "react";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import "./Projects.css";
import { ProjectContext } from "../../context/ProjectContext";
import { useHistory } from "react-router-dom";
import BackIcon from "@material-ui/icons/ArrowBackIosOutlined";

export default function Projects() {
    const projects = useContext(ProjectContext)[0];
    const history = useHistory();


    return (
        <div>
            <h1 className="title">Projects</h1>
            <span className="link-container">
                <span className="link back" onClick={() => history.goBack()}>
                    <BackIcon />
                    <span>Back</span>
                </span>
            </span>
            <div className="projects-container">
                <ProjectSlider projects={projects} />
            </div>
        </div>
    );
}
