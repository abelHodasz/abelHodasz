import React from "react";
import NeumorphicButton from "../NeumorphicButton/NemorphicButton";
import "./Scrollers.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Scrollers(props) {
    return props.scrollerList.map((scroller) => (
        <div className="scroller">
            <NeumorphicButton onClick={() => scrollToRef(scroller.ref)}>
                {scroller.name}
            </NeumorphicButton>
        </div>
    ));
}
