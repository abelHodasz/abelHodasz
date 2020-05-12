import React, { useRef } from "react";
import Scrollers from "../../components/Scrollers/Scrollers";
import { scroller } from "react-scroll";
import Resource from "../../components/Resource/Resource";
import "./Resources.css";

import clippy from "../../static/resourceIcons/clippy.png";

import csscheatsheet from "../../static/resourceIcons/csscheatsheet.png";
import fontawesome from "../../static/resourceIcons/fontawesome.png";
import materialui from "../../static/resourceIcons/material-ui.png";
import subtlepatterns from "../../static/resourceIcons/subtlepatterns.png";
import mediaqueries from "../../static/resourceIcons/mediaQueries.png";
import dribble from "../../static/resourceIcons/dribble.png";
import colorhunt from "../../static/resourceIcons/color hunt.png";
import matter from "../../static/resourceIcons/matter.png";
import turn from "../../static/resourceIcons/turn.png";
import figma from "../../static/resourceIcons/figma.png";
import flatuicolors from "../../static/resourceIcons/flatuicolors.png";
import keycodes from "../../static/resourceIcons/keycodes.png";
import caniuse from "../../static/resourceIcons/caniuse.png";
import leshy from "../../static/resourceIcons/leshy.png";
import optimizilla from "../../static/resourceIcons/optimizilla.png";
import loremipsum from "../../static/resourceIcons/loremipsum.png";

import _0to255 from "../../static/resourceIcons/0to255.svg";
import ionicons from "../../static/resourceIcons/ionicons.svg";
import material from "../../static/resourceIcons/material.svg";
import iso from "../../static/resourceIcons/iso.svg";
import editor from "../../static/resourceIcons/editor.svg";
import csstricks from "../../static/resourceIcons/csstricks.svg";
import cssgradient from "../../static/resourceIcons/cssgradient.svg";
import gitignore from "../../static/resourceIcons/gitignore.svg";
import p5 from "../../static/icons/p5js.svg";

import easing from "../../static/resourceIcons/easing.ico";
import pixabay from "../../static/resourceIcons/pixabay.ico";
import mobbin from "../../static/resourceIcons/mobbin.ico";
import threejs from "../../static/resourceIcons/threejs.ico";
import waypoints from "../../static/resourceIcons/waypoints.ico";
import typer from "../../static/resourceIcons/typer.ico";

import undraw from "../../static/resourceIcons/undraw.jpg";
import landbook from "../../static/resourceIcons/land-book.jpg";
import refactoringguru from "../../static/resourceIcons/refactoringguru.jpg";
import unsplash from "../../static/resourceIcons/unsplash.jpg";

import animate from "../../static/resourceIcons/animate.jpeg";

import autorenametag from "../../static/resourceIcons/autorenametag.Default";
import autoclosetag from "../../static/resourceIcons/autoclosetag.Default";
import quokka from "../../static/resourceIcons/quokka.Default";
import prettier from "../../static/resourceIcons/prettier.Default";
import liveserver from "../../static/resourceIcons/liveserver.Default";
import eslint from "../../static/resourceIcons/eslint.Default";
import reactsnippets from "../../static/resourceIcons/reactsnippets.Default";
import bracketpaircolorized from "../../static/resourceIcons/bracketpaircolorized.Default";
import bettercomments from "../../static/resourceIcons/bettercomments.Default";

export default function Resources() {
    const scrollerList = [
        { name: "Tools for development", ref: useRef(null) },
        { name: "Tools for design", ref: useRef(null) },
        { name: "Inspiration", ref: useRef(null) },
        { name: "Icons, Illustrations, Images", ref: useRef(null) },
        { name: "Css resources", ref: useRef(null) },
        { name: "Cool Libraries", ref: useRef(null) },
        { name: "VsCode Extensions", ref: useRef(null) },
    ];

    return (
        <>
            <h1 className="title">Resources</h1>
            <div className="resources">
                <div className="scrollers">
                    <Scrollers scrollerList={scrollerList} />
                </div>
                {/*Tools for development*/}
                <h2 className="resource-header" ref={scrollerList[0].ref}>
                    {scrollerList[0].name}
                </h2>
                <div className="resource-section">
                    <Resource
                        link="https://imagecompressor.com/"
                        name="Optimizilla"
                        img={optimizilla}
                    >
                        Online image copmressor
                    </Resource>
                    <Resource
                        link="https://loremipsum.io/"
                        name="Loremipsum.io"
                        img={loremipsum}
                    >
                        Lorem ipsum generator
                    </Resource>
                    <Resource
                        link="https://www.gitignore.io/"
                        name="Gitignore.io"
                        img={gitignore}
                    >
                        GitIgnore generator
                    </Resource>
                    <Resource
                        link="https://caniuse.com/"
                        name="Can I use?"
                        img={caniuse}
                    >
                        Supportibility tables for html, css, js..
                    </Resource>
                    <Resource
                        link="https://refactoring.guru/design-patterns"
                        name="Refactoring guru"
                        img={refactoringguru}
                    >
                        Design patterns with examples
                    </Resource>
                    <Resource
                        link="http://keycodes.atjayjo.com/"
                        name="KeyCodes"
                        img={keycodes}
                    >
                        KeyCodes for every key
                    </Resource>
                    <Resource
                        link="https://www.leshylabs.com/apps/sfMaker/"
                        name="Leshy"
                        img={leshy}
                    >
                        Retro-style sound effect generator
                    </Resource>
                </div>
                {/*Tools for design*/}
                <h2 className="resource-header" ref={scrollerList[1].ref}>
                    {scrollerList[1].name}{" "}
                </h2>
                <div className="resource-section">
                    <Resource
                        link="https://cssgradient.io/"
                        name="Css Gradient Generator"
                        img={cssgradient}
                    >
                        Free tool that lets you create a gradient background for
                        websites
                    </Resource>
                    <Resource
                        link="https://www.0to255.com/"
                        name="0 to 255"
                        img={_0to255}
                    >
                        0to255 is a color tool that makes it easy to lighten and
                        darken colors
                    </Resource>
                    <Resource
                        link="https://flatuicolors.com/"
                        name="Flat UI Colors"
                        img={flatuicolors}
                    >
                        A total set of 280 colors are on your command for COPY /
                        PASTE for your next project, design, presentation.
                    </Resource>
                    <Resource
                        link="https://www.figma.com/"
                        name="Figma"
                        img={figma}
                    >
                        Design, prototype, and gather feedback all in one place
                    </Resource>
                </div>
                {/*Inspiration*/}
                <h2 className="resource-header" ref={scrollerList[2].ref}>
                    {scrollerList[2].name}
                </h2>
                <div className="resource-section">
                    <Resource
                        link="https://colorhunt.co/"
                        name="Color Hunt"
                        img={colorhunt}
                    >
                        Color inspiration with thousands of trendy hand-picked
                        color palettes
                    </Resource>
                    <Resource
                        link="https://dribbble.com/"
                        name="Dribble"
                        img={dribble}
                    >
                        Get inspired by designs shared by the Dribble community.
                    </Resource>
                    <Resource
                        link="https://mobbin.design/"
                        name="Mobbin"
                        img={mobbin}
                    >
                        Discover the latest iOS UI design patterns
                    </Resource>
                    <Resource
                        link="https://mediaqueri.es/"
                        name="Media Queries"
                        img={mediaqueries}
                    >
                        Responsive design ideas
                    </Resource>
                    <Resource
                        link="https://land-book.com/"
                        name="Land-book"
                        img={landbook}
                    >
                        Landings, Portfolios, Blogs, Stores & other
                    </Resource>
                </div>
                {/*Icons,Illustrations,Images*/}
                <h2 className="resource-header" ref={scrollerList[3].ref}>
                    {scrollerList[3].name}{" "}
                </h2>
                <div className="resource-section">
                    <Resource
                        link="https://unsplash.com/"
                        name="Unsplash"
                        img={unsplash}
                    >
                        The internet’s source of freely usable images
                    </Resource>
                    <Resource
                        link="https://isorepublic.com/"
                        name="IsoRepublic"
                        img={iso}
                    >
                        Thousands of Free High-Resolution CC0 Photos and Videos
                    </Resource>
                    <Resource
                        link="https://www.toptal.com/designers/subtlepatterns/"
                        name="Subtle Patterns"
                        img={subtlepatterns}
                    >
                        Subtle patterns
                    </Resource>
                    <Resource
                        link="https://pixabay.com/"
                        name="Pixabay"
                        img={pixabay}
                    >
                        Stunning free images & royalty free stock
                    </Resource>
                    <Resource
                        link="https://undraw.co/illustrations"
                        name="unDraw"
                        img={undraw}
                    >
                        Free Illustrations and drawings
                    </Resource>
                    <Resource
                        link="https://material.io/resources/icons/"
                        name="Material design icons"
                        img={material}
                    >
                        Material style icons
                    </Resource>
                    <Resource
                        link="https://material-ui.com/components/material-icons/"
                        name="Material-ui icons"
                        img={materialui}
                    >
                        Material icons for react
                    </Resource>
                    <Resource
                        link="https://fontawesome.com/"
                        name="Font Awesome"
                        img={fontawesome}
                    >
                        Get vector icons and social logos on your website with
                        Font Awesome
                    </Resource>
                    <Resource
                        link="https://ionicons.com/"
                        name="Ionicons"
                        img={ionicons}
                    >
                        Beautifully crafted open source icons
                    </Resource>
                </div>
                {/*Css resources*/}
                <h2 className="resource-header" ref={scrollerList[4].ref}>
                    {scrollerList[4].name}{" "}
                </h2>
                <div className="resource-section">
                    <Resource
                        link="https://css-tricks.com/"
                        name="Css Tips and Tricks"
                        img={csstricks}
                    >
                        Tips and tricks for writing css
                    </Resource>
                    <Resource
                        link="https://htmlcheatsheet.com/css/"
                        name="Css cheat sheet"
                        img={csscheatsheet}
                    >
                        Cheat sheet for css
                    </Resource>
                    <Resource
                        link="https://animate.style/"
                        name="Animate.css"
                        img={animate}
                    >
                        Ready-to-use, cross-browser animations for use in your
                        web projects
                    </Resource>
                    <Resource
                        link="https://bennettfeely.com/clippy/"
                        name="Clippy"
                        img={clippy}
                    >
                        Css clip path maker
                    </Resource>
                    <Resource
                        link="https://easings.net/"
                        name="Easing"
                        img={easing}
                    >
                        Css easing functions demonstrated
                    </Resource>
                </div>
                {/*Cool Libraries*/}
                <h2 className="resource-header" ref={scrollerList[5].ref}>
                    {scrollerList[5].name}{" "}
                </h2>
                <div className="resource-section">
                    <Resource
                        link="https://editorjs.io/"
                        name="Editor.js"
                        img={editor}
                    >
                        Next generation block styled editor.
                    </Resource>
                    <Resource
                        link="http://www.turnjs.com/"
                        name="Turn.js"
                        img={turn}
                    >
                        Make a flip book with HTML5
                    </Resource>
                    <Resource
                        link="https://steven.codes/typerjs/"
                        name="Typer.js"
                        img={typer}
                    >
                        The typing effect with a pure HTML interface
                    </Resource>
                    <Resource
                        link="http://imakewebthings.com/waypoints/"
                        name="Waypoints"
                        img={waypoints}
                    >
                        Waypoints is the easiest way to trigger a function when
                        you scroll to an element.
                    </Resource>
                    <Resource
                        link="https://threejs.org/"
                        name="Three.js"
                        img={threejs}
                    >
                        Display animated 3D computer graphics in a web browser
                    </Resource>
                    <Resource
                        link="https://brm.io/matter-js/"
                        name="Matter.js"
                        img={matter}
                    >
                        2d physics engine for the web
                    </Resource>
                    <Resource link="https://p5js.org/" name="p5.js" img={p5}>
                        Library for creative coding, with a focus on making
                        coding accessible and inclusive for artists, designers,
                        educators, beginners, and anyone else
                    </Resource>
                </div>
                {/*VsCode Extensions*/}
                <h2 className="resource-header" ref={scrollerList[6].ref}>
                    {scrollerList[6].name}
                </h2>
                <div className="resource-section">
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
                        name="Better Comments"
                        img={bettercomments}
                    >
                        Helps you create more human-friendly comments in your
                        code
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"
                        name="Bracket Pair Colorizer"
                        img={bracketpaircolorized}
                    >
                        Allows matching brackets to be identified with colours
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
                        name="ES7/React/Redux/GraphQL/React-native snippets"
                        img={reactsnippets}
                    >
                        Provides you JavaScript and React/Redux snippets in ES7
                        with Babel plugin features
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
                        name="ESLint"
                        img={eslint}
                    >
                        VS Code ESLint extension Build Status Integrates ESLint
                        into VS Code
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
                        name="Live Server"
                        img={liveserver}
                    >
                        Launch a local development server with live reload
                        feature for static & dynamic pages
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                        name="Prettier"
                        img={prettier}
                    >
                        Enforces a consistent style by parsing your code and
                        re-printing it with its own rules that take the maximum
                        line length into account, wrapping code when necessary
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode"
                        name="Quokka.js"
                        img={quokka}
                    >
                        Quokka runs your JavaScript and TypeScript code and
                        displays results inline
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
                        name="Auto Close Tag"
                        img={autoclosetag}
                    >
                        Automatically add HTML/XML close tag
                    </Resource>
                    <Resource
                        link="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
                        name="Auto Rename Tag"
                        img={autorenametag}
                    >
                        Automatically rename paired HTML/XML tag
                    </Resource>
                </div>
            </div>
        </>
    );
}
