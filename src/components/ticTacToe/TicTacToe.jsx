import React, { useState, useEffect } from "react";
import Square from "./Square";

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [game, setGame] = useState(true);
    const [winningSquares, setWinningSquares] = useState([]);

    useEffect(() => {
        document.title = "TicTacToe! - ByteSizeArcade";
    }, []);

    function handleClick(i) {
        if (game) {
            if (squares[i] === null) {
                squares[i] = player;
                checkGame(player);
                setPlayer(player === "X" ? "O" : "X");
            }
        }
    }

    function checkGame(player) {
        checkColumns(player);
        checkRows(player);
        checkDiagonals(player);
        if (squares.filter((sqr) => sqr !== null).length === 9) {
            alert("Draw!");
            setGame(false);
        }
    }

    function checkColumns(player) {
        if (
            squares[0] === player &&
            squares[3] === player &&
            squares[6] === player
        ) {
            setWinningSquares([0, 3, 6]);
            setGame(false);
        } else if (
            squares[1] === player &&
            squares[4] === player &&
            squares[7] === player
        ) {
            setWinningSquares([1, 4, 7]);
            setGame(false);
        } else if (
            squares[2] === player &&
            squares[5] === player &&
            squares[8] === player
        ) {
            setWinningSquares([2, 5, 8]);
            setGame(false);
        }
    }

    function checkRows(player) {
        if (
            squares[0] === player &&
            squares[1] === player &&
            squares[2] === player
        ) {
            setWinningSquares([0, 1, 2]);
            setGame(false);
        } else if (
            squares[3] === player &&
            squares[4] === player &&
            squares[5] === player
        ) {
            setWinningSquares([3, 4, 5]);
            setGame(false);
        } else if (
            squares[6] === player &&
            squares[7] === player &&
            squares[8] === player
        ) {
            setWinningSquares([6, 7, 8]);
            setGame(false);
        }
    }

    function checkDiagonals() {
        if (
            squares[0] === player &&
            squares[4] === player &&
            squares[8] === player
        ) {
            setWinningSquares([0, 4, 8]);
            setGame(false);
        } else if (
            squares[2] === player &&
            squares[4] === player &&
            squares[6] === player
        ) {
            setWinningSquares([2, 4, 6]);
            setGame(false);
        }
    }

    function reset() {
        setSquares(Array(9).fill(null));
        setPlayer("X");
        setGame(true);
        setWinningSquares([]);
    }

    return (
        <>
            <div className="grid grid-cols-3 w-10/12 mx-auto sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 xl:h-5/6">
                <Square
                    winning={winningSquares.includes(0) ? true : false}
                    value={squares[0]}
                    onClick={() => handleClick(0)}
                />
                <Square
                    winning={winningSquares.includes(1) ? true : false}
                    value={squares[1]}
                    onClick={() => handleClick(1)}
                />
                <Square
                    winning={winningSquares.includes(2) ? true : false}
                    value={squares[2]}
                    onClick={() => handleClick(2)}
                />
                <Square
                    winning={winningSquares.includes(3) ? true : false}
                    value={squares[3]}
                    onClick={() => handleClick(3)}
                />
                <Square
                    winning={winningSquares.includes(4) ? true : false}
                    value={squares[4]}
                    onClick={() => handleClick(4)}
                />
                <Square
                    winning={winningSquares.includes(5) ? true : false}
                    value={squares[5]}
                    onClick={() => handleClick(5)}
                />
                <Square
                    winning={winningSquares.includes(6) ? true : false}
                    value={squares[6]}
                    onClick={() => handleClick(6)}
                />
                <Square
                    winning={winningSquares.includes(7) ? true : false}
                    value={squares[7]}
                    onClick={() => handleClick(7)}
                />
                <Square
                    winning={winningSquares.includes(8) ? true : false}
                    value={squares[8]}
                    onClick={() => handleClick(8)}
                />
            </div>
            <div className="flex justify-center py-4">
                <button
                    className="border-2 rounded-sm px-6 py-4 bg-transparent/50"
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </>
    );
}
