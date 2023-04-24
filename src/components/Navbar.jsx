export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between">
            <div>
                <a href="/index.html">ByteSizeArcade</a>
            </div>
            <div className="nav-games">
                <a>RockPaperScissors</a>
            </div>
        </nav>
    );
}
