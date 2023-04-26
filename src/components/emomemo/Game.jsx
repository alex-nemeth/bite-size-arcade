import React from "react";
import data from "./data";
import { shuffleArray } from "./shuffleArray";

export default function Game({ onPress }) {
    function renderCards() {
        const shuffledData = shuffleArray(data);
        return shuffledData.map((image) => (
            <div
                className="flex flex-wrap items-center max-h-33 rounded-lg bg-slate-400 hover:cursor-pointer"
                onClick={() => onPress(image.name)}
                id={image.name}
            >
                <img
                    className="bg-inherit rounded-lg"
                    src={image.img}
                    alt={image.name}
                />
                <h3 className="bg-inherit w-full text-center text-md sm:text-lg md:text-xl lg:text-3xl py-5 rounded-lg">
                    {image.name}
                </h3>
            </div>
        ));
    }
    return (
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 p-3 max-h-90">
            {renderCards()}
        </div>
    );
}
