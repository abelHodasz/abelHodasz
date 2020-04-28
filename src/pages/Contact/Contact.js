import React from "react";
import GithubIcon from "../../static/icons/gitHubIcon.png";
import LinkedInIcon from "../../static/icons/linkedInIcon.png";
import "./Contact.css";
import GmailIcon from "../../static/icons/gmail.png";
import Neumorphic from "../../components/NeumorphicButton/NemorphicButton";

export default function Contact() {
    return (
        <div className="contact-page">
            <h1 className="title">Contact</h1>
            <ul className="contact-list">
                <li className="contact-item">
                    <Neumorphic
                        onClick={(e) =>
                            window.open("https://github.com/abelHodasz")
                        }
                    >
                        <img
                            className="contact-img"
                            src={GithubIcon}
                            alt="github"
                        />

                        <p className="contact-text">abelHodasz</p>
                    </Neumorphic>
                </li>
                <li className="contact-item">
                    <Neumorphic
                        onClick={(e) =>
                            window.open(
                                "https://www.linkedin.com/in/abel-hodasz/"
                            )
                        }
                    >
                        <img
                            className="contact-img"
                            src={LinkedInIcon}
                            alt="linkedin"
                        />
                        <p className="contact-text">abel-hodasz</p>
                    </Neumorphic>
                </li>
                <li className="contact-item">
                    <a href="mailto:hodaszabel@gmail.com">
                        <Neumorphic>
                            <img
                                className="contact-img"
                                src={GmailIcon}
                                alt="linkedin"
                            />

                            <p className="contact-text">hodaszabel@gmail.com</p>
                        </Neumorphic>
                    </a>
                </li>
            </ul>
        </div>
    );
}
