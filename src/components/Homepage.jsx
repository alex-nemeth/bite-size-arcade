import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import games from "../games";

export default function Homepage() {
    useEffect(() => {
        document.title = "ByteSizeArcade";
    }, []);

    function generateCards() {
        return games.map((game) => (
            <div className="border-2 rounded-md flex flex-col justify-between bg-transparent/40 w-10/12">
                <h1 className="text-2xl text-center py-2">{game.title}</h1>
                <Link to={game.url}>
                    <img
                        className="px-4 mx-auto h-64 object-cover overflow-hidden"
                        src={game.img}
                        alt=""
                    />
                </Link>
                <p className="text-md text-center mt-2 mx-3">
                    {game.description}
                </p>
                <Link className="mx-auto" to={game.url}>
                    <button className="text-xl border-2 rounded-md px-6 py-2 my-4 bg-blue-600 hover:bg-blue-700 transition-all">
                        Play
                    </button>
                </Link>
            </div>
        ));
    }

    return (
        <div className="grid grid-cols-1 w-10/12 ms-auto lg:mx-auto gap-4 xl:grid-cols-5 xl:w-11/12 h-full pt-12">
            {generateCards()}
        </div>
    );
}
