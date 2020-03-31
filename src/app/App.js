import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Project from "../pages/Project/Project";
import ProjectsByCategory from "../pages/ProjectsByCategory/ProjectsByCategory";
import Projects from "../pages/Projects/Projects";
import { ThemeProvider } from "@material-ui/core";
import { basic } from "../themes/themes";
import { ProjectProvider } from "../context/ProjectContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "../components/Background/Background";
import topBackground from "../static/svg/top.svg";
import middleBackground from "../static/svg/middle.svg";
import bottomBackground from "../static/svg/bottom.svg";
import anime from "animejs/lib/anime.es.js";

function App() {
    const content = <Content />;

    useEffect(() => {}, []);

    return (
        <ProjectProvider>
            {/*<Background />*/}
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
