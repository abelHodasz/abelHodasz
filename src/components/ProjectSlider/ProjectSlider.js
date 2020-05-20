import React, { useState, useEffect } from "react";
import "./ProjectSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

export default function ProjectSlider(props) {
    const history = useHistory();

    const setSlidesBasedOnWidth = () => {
        const width = window.innerWidth;
        return width > 800 ? (width > 900 ? 3 : 2) : 1;
    };

    const [slidesToShow, setSlidesToShow] = useState(setSlidesBasedOnWidth());
    const SliderItemJsx = props.projects.map((p) => (
        <div key={p.name}>
            <div
                onClick={() => history.push(p.page)}
                className="link-container slider-header"
            >
                <h4 className="link">{p.name}</h4>
            </div>
            <img className="slider-image" src={p.image} alt={p.name} />
        </div>
    ));

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSlidesToShow(setSlidesBasedOnWidth());
        });
    }, []);

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        className: "slider-project-container",
        swipeToSlide: true,
    };

    return (
        <div className="project-slider">
            <Slider {...settings}>{SliderItemJsx}</Slider>
            <div className="link-container">
                <div onClick={() => history.push("/projects")} className="link">
                    <span>All projects </span>
                    <ArrowForwardIosOutlinedIcon />
                </div>
            </div>
        </div>
    );
}
