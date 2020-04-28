import "./Card.css";

import React, { useState, useEffect } from "react";
import ArrowIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { CSSTransition } from "react-transition-group";

export default function Card(props) {
    const [open, setOpen] = useState(false);
    const [cardHeight, setCardHeight] = useState("3.2rem");

    useEffect(() => {
        open ? setCardHeight(400) : setCardHeight("3.2rem");
    }, [open]);

    return (
        <div>
            <div
                className="card"
                style={{
                    maxHeight: cardHeight,
                }}
            >
                <div className="card-header" onClick={() => setOpen(!open)}>
                    <ArrowIcon
                        className="header-icon"
                        fontSize="small"
                        style={{
                            transform: "rotate(" + (open ? 90 : 0) + "deg)",
                        }}
                    />
                    <h3 className="header-text">{props.header}</h3>
                </div>
                <div className="card-text">
                    <p>{props.children}</p>
                </div>
            </div>
        </div>
    );
}
