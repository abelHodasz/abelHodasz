import React from "react";
import "./NeumorphicButton.css";

export default function NemorphicButton(props) {
    return (
        <button
            className={props.className + " neumorphic-btn"}
            onClick={props.onClick}
        >
            <span>{props.children}</span>
        </button>
    );
}
