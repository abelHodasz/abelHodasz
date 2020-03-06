import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Project from "../pages/Project/Project";
import ProjectsByCategory from "../pages/ProjectsByCategory/ProjectsByCategory";
import Projects from "../pages/Projects/Projects";
import { Container, ThemeProvider } from "@material-ui/core";
import { basic } from "../themes/themes";
import { ProjectProvider } from "../context/ProjectContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import topBackground from "../static/svg/top.svg";
import middleBackground from "../static/svg/middle.svg";
import bottomBackground from "../static/svg/bottom.svg";
import anime from "animejs/lib/anime.es.js";

function App() {
    const content = <Content />;
    const [scrollTop, setScrollTop] = useState(
        document.querySelector("html").scrollTop
    );
    useEffect(() => {
        window.addEventListener("scroll", e => {
            const html = document.querySelector("html");
            const scrollTop = html.scrollTop;
            setScrollTop(scrollTop);
        });
    }, []);

    const topStyle = { transform: "translateY(-" + scrollTop + "px)" };

    const middleStyle = {
        transition: "all 1.5s ease",
        transform: "scale(1.02) translateX(1%) translateY(-" + scrollTop + "px)"
    };

    const bottomStyle = {
        transition: "transform 3s ease",
        transform:
            "scale(1.04) translateX(-1%) translateY(-" + scrollTop + "px)"
    };

    return (
        <ProjectProvider>
            <div className="background-container">
                <img
                    style={topStyle}
                    className="top-background background-svg"
                    src={topBackground}
                    alt=""
                />
                <img
                    style={middleStyle}
                    className="middle-background background-svg"
                    src={middleBackground}
                    alt=""
                />
                <img
                    style={bottomStyle}
                    className="bottom-background background-svg"
                    src={bottomBackground}
                    alt=""
                />
            </div>
            {content}
        </ProjectProvider>
    );
}

function Content() {
    return (
        <Fragment>
            <Router>
                <ThemeProvider theme={basic}>
                    <Header />
                    <main className="app">
                        <div className="page-container">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route
                                    path="/projects"
                                    exact
                                    component={Projects}
                                />
                                <Route
                                    path="/about-me"
                                    exact
                                    component={AboutMe}
                                />
                                <Route
                                    path="/projects/:id"
                                    component={Project}
                                    exact
                                />
                                <Route
                                    path="/projects/category/:category"
                                    exact
                                    component={ProjectsByCategory}
                                />
                            </Switch>
                        </div>
                    </main>
                    <Footer />
                </ThemeProvider>
            </Router>
        </Fragment>
    );
}

export default App;
