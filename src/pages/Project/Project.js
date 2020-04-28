import React, { Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import BackIcon from "@material-ui/icons/ArrowBackIosOutlined";
import "./Project.css";
import NeumorphicButton from "../../components/NeumorphicButton/NemorphicButton";

export default function Project(props) {
    const history = useHistory();
    const { id } = useParams();
    const project = useContext(ProjectContext)[0].find((proj) => proj.id == id);

    const technologiesJSX = project.technologies ? (
        project.technologies.map((tech) => (
            <span key={tech.name}>
                <img className="tech-logo" src={tech.icon} alt={tech.name} />
                <p>{tech.name}</p>
            </span>
        ))
    ) : (
        <span></span>
    );

    if (!project) {
        return (
            <div>
                <h1 className="title">Sorry couldn't find this page</h1>
                <span className="link-container">
                    <span
                        className="link back"
                        onClick={() => history.goBack()}
                    >
                        <BackIcon />
                        <span>Back</span>
                    </span>
                </span>
            </div>
        );
    }

    return (
        <div>
            <h1 className="title">{project.name}</h1>
            <span className="link-container">
                <span className="link back" onClick={() => history.goBack()}>
                    <BackIcon />
                    <span>Back</span>
                </span>
            </span>
            <span className="single-project-container">
                <div className="sp-description-container">
                    <div className="sp-description">{project.description}</div>
                    <span className="sp-technologies">{technologiesJSX}</span>
                </div>
                <div className="sp-image-container">
                    <span className="sp-image">
                        <img src={project.image} alt="screenshot" />
                    </span>
                    <span className="sp-links">
                        {project.gitHubLink ? (
                            <NeumorphicButton
                                onClick={() => window.open(project.gitHubLink)}
                            >
                                Code
                            </NeumorphicButton>
                        ) : (
                            <Fragment />
                        )}
                        <NeumorphicButton
                            onClick={() => window.open(project.link)}
                        >
                            App
                        </NeumorphicButton>
                    </span>
                </div>
            </span>
        </div>
    );
}
