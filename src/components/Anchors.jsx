import { Link } from "react-router-dom";

export default function Anchors() {
    return (
        <div className="flex gap-3 items-center me-4">
            <Link className="hover:text-blue-500 transition-all" to="/tenzies">
                <a>Tenzies</a>
            </Link>
            <Link className="hover:text-blue-500 transition-all" to="/emomemo">
                <a>Emomemo</a>
            </Link>
            <Link
                className="hover:text-blue-500 transition-all"
                to="/sketchbox"
            >
                <a>Sketchbox</a>
            </Link>
            <Link
                className="hover:text-blue-500 transition-all"
                to="/tictactoe"
            >
                <a>TicTacToe</a>
            </Link>
            <Link
                className="hover:text-blue-500 transition-all"
                to="/rockpaperscissors"
            >
                <a>RockPaperScissors</a>
            </Link>
        </div>
    );
}
