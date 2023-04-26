import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Sketchbox() {
    const [size, setSize] = useState(32);
    const [sessionId, setSessionId] = useState(nanoid());
    let color = "black";

    useEffect(() => {
        document.title = "Sketchbox! - ByteSizeArcade";
    });

    function createBoxes(size) {
        const amountOfBoxes = size * size;
        let toRender = [];
        for (let i = 0; i < amountOfBoxes; i++) toRender.push(i);
        return toRender.map(() => (
            <div
                className="bg-white"
                onMouseOver={(e) => coloring(e)}
                key={nanoid()}
            ></div>
        ));
    }

    const sizeInput = () => {
        let input = prompt("Size of the sketchbox? (1-100)");
        while (input <= 0 || input > 100)
            input = prompt("Wrong size, try again. (1-100)");
        setSize(input);
        createBoxes(input);
    };

    function coloring(e) {
        console.log("coloring");
        if (color === "random") {
            e.target.style.backgroundColor = `hsl(${
                Math.random() * 360
            }, 100%, 50%)`;
        } else e.target.style.backgroundColor = color;
    }

    const reset = () => {
        setSessionId(nanoid());
    };

    const gridStyle = "repeat(" + size + ", 1fr)";

    return (
        <div
            className="flex flex-col justify-center items-center mx-auto
                    w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12
                    font-mono"
        >
            <h1 className="font-signature mb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Sketchbox!
            </h1>
            <div
                className="grid aspect-square border-2 border-black w-full"
                style={{
                    gridTemplateRows: gridStyle,
                    gridTemplateColumns: gridStyle,
                }}
            >
                {createBoxes(size)}
            </div>
            <div className="flex gap-1 mt-2">
                <button
                    className="px-4 py-2 w-1/5 bg-sky-400
                            hover:font-semibold hover:shadow-sky-500/[0.6] hover:shadow-lg
                            active:bg-sky-500 transition-all"
                    onClick={sizeInput}
                >
                    Size
                </button>
                <button
                    className="px-4 py-2 bg-black w-1/5
                            hover:font-semibold hover:shadow-black/[0.6] hover:shadow-lg
                            active:bg-gray-800 transition-all"
                    onClick={() => (color = "black")}
                >
                    Black
                </button>
                <button
                    className="px-4 py-2 bg-gradient-to-r from-pink-500  to-yellow-500 w-1/5 text-center
                            hover:font-semibold hover:shadow-orange-500/[0.6] hover:shadow-lg
                            active:from-pink-600 active:to-yellow-600 transition-all"
                    onClick={() => (color = "random")}
                >
                    <a className="text-center">Rainbow</a>
                </button>
                <button
                    className="px-4 py-2 w-1/5 bg-white text-black
                            hover:font-semibold hover:shadow-white/[0.4] hover:shadow-lg
                            active:bg-gray-300 transition-all"
                    onClick={() => (color = "white")}
                >
                    Eraser
                </button>
                <button
                    className="px-4 py-2 w-1/5 bg-red-500 hover:shadow-red-500/[0.7] hover:shadow-lg
                            active:bg-red-600 transition-all"
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
