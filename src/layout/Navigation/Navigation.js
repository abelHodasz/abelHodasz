import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Logo from "../../components/AbelHodasz/AbelHodasz";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AboutIcon from "@material-ui/icons/AccountCircleOutlined";
import ContactIcon from "@material-ui/icons/ContactsOutlined";
import ProjectsIcon from "@material-ui/icons/WorkOutlineOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";

export default function Navigation() {
    const iconSize = 30;
    const [hover, setHover] = useState(false);

    return (
        <nav
            className="navbar"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            <ul className="navbar-nav">
                <li className="logo">
                    <NavLink to="/">
                        <Logo animate={hover} />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/"
                        activeClassName="link-active"
                        className="nav-link"
                        exact
                    >
                        <HomeIcon
                            style={{ fontSize: iconSize }}
                            className="nav-icon"
                        />
                        <span className="link-text">Home</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="link-active"
                        className="nav-link"
                        to="/about-me"
                        exact
                    >
                        <AboutIcon
                            style={{ fontSize: iconSize }}
                            className="nav-icon"
                        />
                        <span className="link-text">About me</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="link-active"
                        className="nav-link"
                        to="/contact"
                        exact
                    >
                        <ContactIcon
                            style={{ fontSize: iconSize }}
                            className="nav-icon"
                        />
                        <span className="link-text">Contact</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="link-active"
                        className="nav-link"
                        to="/projects"
                        exact
                    >
                        <ProjectsIcon
                            style={{ fontSize: iconSize }}
                            className="nav-icon"
                        />
                        <span className="link-text">Projects</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="link-active"
                        className="nav-link"
                        to="/resources"
                        exact
                    >
                        <BrushOutlinedIcon
                            style={{ fontSize: iconSize }}
                            className="nav-icon"
                        />
                        <span className="link-text">Resources</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
