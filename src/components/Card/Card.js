import "./Card.css";

import React, { useState, useEffect } from "react";
import ArrowIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { CSSTransition } from "react-transition-group";

export default function Card(props) {
    const [open, setOpen] = useState(false);
    const [cardHeight, setCardHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setCardHeight(height);
    }

    return (
        <div
            className="card"
            style={
                {
                    /*height: cardHeight*/
                }
            }
        >
            <div className="card-header" onClick={() => setOpen(!open)}>
                <ArrowIcon
                    className="header-icon"
                    fontSize="small"
                    style={{ transform: "rotate(" + (open ? 90 : 0) + "deg)" }}
                />
                <h3 className="header-text">{props.header}</h3>
            </div>
            {open && (
                <div className="card-text">
                    <p>{props.children}</p>
                </div>
            )}
        </div>
    );
}
