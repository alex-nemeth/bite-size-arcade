import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import RockPaperScissors from "./components/rockPaperScissors/RockPaperScissors";
import Sketchbox from "./components/sketchBox/Sketchbox";
import Emomemo from "./components/emomemo/Emomemo";
import { Route, Routes } from "react-router";
import TicTacToe from "./components/ticTacToe/TicTacToe";
import Tenzies from "./components/tenzies/Tenzies";

function App() {
    return (
        <div className="bg-gradient-to-br from-blue-900 to-purple-950 text-white min-h-screen h-full w-full">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar /> <Homepage />
                        </>
                    }
                />

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
                <Route
                    path="/emomemo"
                    element={
                        <>
                            <Navbar /> <Emomemo />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
