import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Logo from "../../components/AbelHodasz/AbelHodasz";
import LogoSmall from "../../components/AbelHodaszSmall/AbelHodaszSmall";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AboutIcon from "@material-ui/icons/AccountCircleOutlined";
import PortfolioIcon from "@material-ui/icons/WorkOutlineOutlined";
import ProjectsIcon from "@material-ui/icons/PaletteOutlined";

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
                        to="/portfolio"
                        exact
                    >
                        <PortfolioIcon
                            style={{ fontSize: iconSize }}
                            className="nav-icon"
                        />
                        <span className="link-text">Portfolio</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="link-active"
                        className="nav-link"
                        to="/all-projects"
                        exact
                    >
                        <ProjectsIcon
                            style={{ fontSize: iconSize }}
                            className="nav-icon"
                        />
                        <span className="link-text">Projects</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
