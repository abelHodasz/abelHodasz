import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import AllProjects from "../../components/AllProjects/AllProjects";
import BackIcon from "@material-ui/icons/ArrowBackIosOutlined";

export default function ProjectsByCategory() {
    const history = useHistory();
    const { category } = useParams();
    const projects = useContext(ProjectContext)[0].filter(
        (proj) => proj.category === category
    );
    if (!projects.length) {
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
            <h1 className="title">{category} Projects</h1>
            <span className="link-container">
                <span className="link back" onClick={() => history.goBack()}>
                    <BackIcon />
                    <span>Back</span>
                </span>
            </span>
            <div className="projects-container">
                <AllProjects projects={projects} />
            </div>
        </div>
    );
}
