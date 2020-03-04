import React, { useContext, Fragment } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import "./ProjectSlider.css";
import gitHubIcon from "../../static/icons/gitHubIcon.png";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import { useHistory } from "react-router-dom";

export default function ProjectSlider(props) {
    const projects = useContext(ProjectContext)[0];
    const history = useHistory();

    return projects.map(project => (
        <span className="project">
            <div className="project-header">
                <span
                    className="project-logo-container"
                    onClick={() => {
                        window.open(project.link);
                    }}
                >
                    <span className="play-icon-container">
                        <PlayArrowRoundedIcon className="play-icon" />
                    </span>
                    <img src={project.logo} className="project-logo" alt="" />
                </span>
                <a href={project.page}>
                    <h3>{project.name}</h3>
                </a>
                {project.gitHubLink ? (
                    <span className="github-icon-container">
                        <a
                            href={project.gitHubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="github-icon"
                                src={gitHubIcon}
                                alt="gitHub"
                            ></img>
                        </a>
                    </span>
                ) : (
                    <Fragment />
                )}
            </div>
            <div
                key={project.id}
                className="project-container"
                onClick={() => {
                    history.push(project.page);
                }}
            >
                <img
                    className="project-image pc"
                    src={project.image}
                    alt={project.name}
                />
                <img
                    className="project-image mobile"
                    src={project.imageMobile}
                    alt={project.name}
                />
            </div>
        </span>
    ));
}
