import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

    function toggleDropdown() {
        setDropdown((dropdown) => !dropdown);
    }

    return (
        <div>
            <div>
                <button
                    className="block h-10 w-10 mr-2"
                    onClick={toggleDropdown}
                >
                    <img
                        src="/images/menu.png"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    ></img>
                </button>
                <div
                    className={`${
                        dropdown ? "absolute" : "hidden"
                    } right-2 flex flex-col py-2 bg-white text-black rounded-md w-48 mt-4 shadow-2xl transition-all`}
                >
                    <Link
                        onClick={() => setDropdown(false)}
                        className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
                        to="/tenzies"
                    >
                        <a>Tenzies</a>
                    </Link>
                    <Link
                        onClick={() => setDropdown(false)}
                        className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
                        to="/emomemo"
                    >
                        <a>Emomemo</a>
                    </Link>
                    <Link
                        onClick={() => setDropdown(false)}
                        className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
                        to="/sketchbox"
                    >
                        <a>Sketchbox</a>
                    </Link>
                    <Link
                        onClick={() => setDropdown(false)}
                        className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
                        to="/tictactoe"
                    >
                        <a>TicTacToe</a>
                    </Link>
                    <Link
                        onClick={() => setDropdown(false)}
                        className="px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
                        to="/rockpaperscissors"
                    >
                        <a>RockPaperScissors</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
