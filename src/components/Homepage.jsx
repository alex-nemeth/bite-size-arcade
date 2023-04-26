import React, { useEffect } from "react";
import games from "../games";

export default function Homepage() {
    useEffect(() => {
        document.title = "ByteSizeArcade";
    });

    function generateCards() {
        return games.map((game) => (
            <div className="border-2">
                <h1>{game.title}</h1>
                <p>{game.description}</p>
                <img src={game.img} alt="" />
                <button>Play {game.title}</button>
            </div>
        ));
    }

    return <div className="grid grid-cols-1 w-screen">{generateCards()}</div>;
}
