import React, { useContext, Fragment } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import "./ProjectSlider.css";
import gitHubIcon from "../../static/icons/gitHubIcon.png";
import { useHistory } from "react-router-dom";

export default function ProjectSlider(props) {
    const projects = props.projects;
    const history = useHistory();

    if (!props.projects) return null;

    const projectToJsx = project => (
        <span className="project" key={project.id}>
            <div className="project-header">
                <span
                    className="project-logo-container"
                    onClick={() => {
                        if (
                            history.location.pathname !==
                            "/projects/category/" + project.category
                        ) {
                            history.push(
                                "/projects/category/" + project.category
                            );
                        }
                    }}
                >
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
                className="project-container"
                onClick={() => {
                    window.open(project.link);
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
    );

    if (!props.projects.length) return projectToJsx(projects);

    return projects.map(projectToJsx);
}
