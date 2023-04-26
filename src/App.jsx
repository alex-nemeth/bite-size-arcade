import { useState } from "react";
import Navbar from "./components/Navbar";
import RockPaperScissors from "./components/rockPaperScissors/RockPaperScissors";
import Sketchbox from "./components/sketchBox/Sketchbox";
import { Route, Routes } from "react-router";
import TicTacToe from "./components/ticTacToe/TicTacToe";
import Tenzies from "./components/tenzies/Tenzies";

function App() {
    return (
        <div className="bg-gradient-to-br from-blue-900 to-purple-950 text-white h-screen w-screen">
            <Routes>
                <Route path="/" element={<Navbar />} />

                <Route
                    path="/sketchbox"
                    element={
                        <>
                            <Navbar /> <Sketchbox />
                        </>
                    }
                />
                <Route
                    path="/rockpaperscissors"
                    element={
                        <>
                            <Navbar /> <RockPaperScissors />
                        </>
                    }
                />
                <Route
                    path="/tictactoe"
                    element={
                        <>
                            <Navbar /> <TicTacToe />
                        </>
                    }
                />
                <Route
                    path="/tenzies"
                    element={
                        <>
                            <Navbar /> <Tenzies />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
