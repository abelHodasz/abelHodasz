import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import NemorphicButton from "../../components/NeumorphicButton/NemorphicButton";
export default function Home() {
    const history = useHistory();
    return (
        <Fragment>
            <h1 className="title">Home</h1>
            <div id="home">
                <div className="home-header">
                    <h3 className="home-h3">I design</h3>
                    <ul className="home-qualities">
                        <li>
                            <h3>Simple</h3>
                        </li>
                        <li>
                            <h3>Elegant</h3>
                        </li>
                        <li>
                            <h3>Fast</h3>
                        </li>
                    </ul>
                    <h3>websites with a mobile first approach</h3>
                </div>
                <div className="home-about-button">
                    {" "}
                    <NemorphicButton
                        onClick={() => {
                            history.push("/about-me");
                        }}
                    >
                        More About Me
                    </NemorphicButton>
                </div>
                <div className="home-projects"></div>
            </div>
        </Fragment>
    );
}
