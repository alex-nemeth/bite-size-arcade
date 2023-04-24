import { useState } from "react";
import Navbar from "./components/Navbar";
import RockPaperScissors from "./components/rockPaperScissors/RockPaperScissors";
import Sketchbox from "./components/sketchBox/Sketchbox";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="bg-gradient-to-br from-blue-900 to-purple-950 text-white h-screen w-screen">
            <Navbar />
            <Sketchbox />
        </div>
    );
}

export default App;
