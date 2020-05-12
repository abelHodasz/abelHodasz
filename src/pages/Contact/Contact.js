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
            <div className="contact-list">
                <div className="contact-item">
                    <img
                        className="contact-img"
                        src={GithubIcon}
                        alt="github"
                        onClick={(e) =>
                            window.open("https://github.com/abelHodasz")
                        }
                    />
                    <a
                        className="contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/abelHodasz"
                    >
                        abelHodasz
                    </a>
                </div>
                <div className="contact-item">
                    <img
                        className="contact-img"
                        src={LinkedInIcon}
                        alt="linkedin"
                        onClick={(e) =>
                            window.open(
                                "https://www.linkedin.com/in/abel-hodasz/"
                            )
                        }
                    />
                    <a
                        className="contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/abel-hodasz/"
                    >
                        abel-hodasz
                    </a>
                </div>
                <div className="contact-item">
                    <img
                        className="contact-img"
                        src={GmailIcon}
                        alt="linkedin"
                    />
                    <a
                        href="mailto:hodaszabel@gmail.com"
                        className="contact-link"
                    >
                        hodaszabel@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
