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
                    />
                    <Neumorphic
                        onClick={(e) =>
                            window.open("https://github.com/abelHodasz")
                        }
                    >
                        <p className="contact-text">abelHodasz</p>
                    </Neumorphic>
                </div>
                <div className="contact-item">
                    <img
                        className="contact-img"
                        src={LinkedInIcon}
                        alt="linkedin"
                    />
                    <Neumorphic
                        onClick={(e) =>
                            window.open(
                                "https://www.linkedin.com/in/abel-hodasz/"
                            )
                        }
                    >
                        <p className="contact-text">abel-hodasz</p>
                    </Neumorphic>
                </div>
                <div className="contact-item">
                    <img
                        className="contact-img"
                        src={GmailIcon}
                        alt="linkedin"
                    />
                    <a href="mailto:hodaszabel@gmail.com">
                        <Neumorphic>
                            <p className="contact-text">hodaszabel@gmail.com</p>
                        </Neumorphic>
                    </a>
                </div>
            </div>
        </div>
    );
}
