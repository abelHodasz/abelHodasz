import React, { useEffect, useState, Fragment } from "react";
import { generatePerlinNoise as noise } from "perlin-noise";
import "./Background.css";
export default function Background() {
    const x = 50;
    const y = 50;

    const randomNum = (from, to) => {
        return Math.floor(Math.random() * (to - from)) + from;
    };

    const setRandomColor = () => {
        setColor(getRandomColor());
    };

    const getRandomColor = () => {
        return {
            red: randomNum(100, 200),
            green: randomNum(100, 200),
            blue: randomNum(100, 200)
        };
    };

    const [divs, setDivs] = useState(null);
    const [color, setColor] = useState(getRandomColor());

    const mapRange = function(n, start1, stop1, start2, stop2) {
        return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    };

    const perlin = (rows, cols) => {
        const perlinNoiseFlat = noise(cols, rows, { amplitude: 400 });
        let perlinNoise = [];
        for (let i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (!perlinNoise[i]) perlinNoise[i] = [];
                perlinNoise[i][j] = perlinNoiseFlat[cols * i + j];
            }
        }
        return perlinNoise;
    };

    const getScrollbarWidth = () => {
        return window.innerWidth - document.documentElement.clientWidth;
    };

    useEffect(() => {
        const windowSize = [window.innerWidth, window.innerHeight];
        const width = windowSize[0] / x;
        let perlinNoise = perlin(x, y);
        console.log(perlinNoise);
        perlinNoise = perlinNoise.map(row =>
            row.map(number => mapRange(number, 0, 1, -100, 100))
        );
        console.log(perlinNoise);
        const cols = [];
        for (let i = 0; i < x; i++) {
            const row = [];
            for (let j = 0; j < y; j++) {
                const style = {
                    backgroundColor:
                        "rgb(" +
                        (color.red + perlinNoise[i][j]) +
                        "," +
                        (color.green + perlinNoise[i][j]) +
                        "," +
                        (color.blue + perlinNoise[i][j]) +
                        ")",
                    width,
                    height: width,
                    flexGrow: "1",
                    border: "0.3px solid black"
                };
                row.push(<div className="square" style={style}></div>);
            }
            cols.push(<div className="row">{row}</div>);
        }
        setDivs(cols);
    }, []);

    return (
        <div className="background-container">
            {divs}
        </div>
    );
}
