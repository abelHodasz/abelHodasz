import React from "react";
import Card from "../../components/Card/Card";
import "./AboutMe.css";

export default function () {
    return (
        <div className="about-me">
            <h1 className="title">About me</h1>
            <div className="cards">
                <Card
                    header="Self Definition
"
                >
                    I'm a flexible and calm person who adapts with every
                    situation and environment well. I try to find the optimal
                    solution for every problem, I'm a bit of a maximalist. I
                    like working with other driven people. I think before
                    talking, and I usually get to the point. I'm honest, but try
                    not to hurt other's feelings.
                </Card>
                <Card header="About Me">
                    I love extreme sports like Canyoning, Via Ferrata,
                    Snowboarding, Rock Climbing and generally being close to
                    nature. I play the piano for my (and other's) entertainment
                    and have a passion for music. I'm happy to play a board game
                    with my friends in my freetime.
                </Card>
                <Card header="Main Interests">
                    My main interest is in front end web development but I like
                    being challenged and learn interesting current technologies
                    (Machine learning, Cloud, Game Development). My strongest
                    skills are in React, JavaScipt, and C#. I also have some
                    experience in Python, Java, and Unity.
                </Card>
                <Card header="Hard Skills">
                    <ul>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>GraphQL</li>
                        <li>GoLang</li>
                        <li>NodeJs</li>
                        <li>Git</li>
                        <li>Html, Css</li>
                    </ul>
                </Card>
                <Card header="Soft Skills">
                    <ul>
                        <li>Agility</li>
                        <li>Listening</li>
                        <li>Growth Mindset</li>
                        <li>Time management</li>
                        <li>Teamwork</li>
                        <li>Presentation</li>
                    </ul>
                </Card>
                <Card header="Other Skills">
                    I have experience in Adobe Programs (Photoshop, Premiere
                    Pro) and I have created a few Wordpress sites for clients. I
                    also worked with Unity and the three.js library.
                </Card>
            </div>
        </div>
    );
}
