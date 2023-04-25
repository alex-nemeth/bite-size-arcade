import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between mb-16">
            <Link to="/">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="ByteSizeArcade Logo"
                        className="w-14 mr-2"
                    />
                    <a href="/" className="font-signature">
                        ByteSizeArcade
                    </a>
                </div>
            </Link>
            <div className="nav-games">
                <Link to="/sketchbox">
                    <a>Sketchbox</a>
                </Link>
                <Link to="/rockpaperscissors">
                    <a>RockPaperScissors</a>
                </Link>
            </div>
        </nav>
    );
}
