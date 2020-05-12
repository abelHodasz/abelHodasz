import React from "react";
import "./Resource.css";

export default function Resource(props) {
    return (
        <div className="resource">
            <div>
                <img
                    className="resource-img"
                    height="40"
                    src={props.img}
                    alt={props.name}
                ></img>
            </div>
            <a
                className="resource-link"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.name}
            </a>
            <p>{props.children}</p>
        </div>
    );
}
