import React from "react";
import games from "../games";

export default function Homepage() {
    function generateCards() {
        return games.map((game) => (
            <div className="border-2">
                <h1>{game.title}</h1>
                <p>{game.description}</p>
                <img src={game.img} alt="" />
            </div>
        ));
    }

    return <div>{generateCards()}</div>;
}
