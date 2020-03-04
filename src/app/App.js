import React, { Fragment } from "react";
import "./App.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home/Home";
import { Container, ThemeProvider } from "@material-ui/core";
import { basic } from "../themes/themes";
import { ProjectProvider } from "../context/ProjectContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <ProjectProvider>
            <Content />
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
                        <Container>
                            <Switch>
                                <Route path="/" exact component={Home} />
                            </Switch>
                        </Container>
                    </main>
                    <Footer />
                </ThemeProvider>
            </Router>
        </Fragment>
    );
}

export default App;
