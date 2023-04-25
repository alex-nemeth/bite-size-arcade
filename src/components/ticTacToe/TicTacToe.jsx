import React, { useState } from "react";
import Square from "./Square";

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [game, setGame] = useState(true);

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
            setGame(false);
        } else if (
            squares[1] === player &&
            squares[4] === player &&
            squares[7] === player
        )
            setGame(false);
        else if (
            squares[2] === player &&
            squares[5] === player &&
            squares[8] === player
        )
            setGame(false);
    }

    function checkRows(player) {
        if (
            squares[0] === player &&
            squares[1] === player &&
            squares[2] === player
        )
            setGame(false);
        else if (
            squares[3] === player &&
            squares[4] === player &&
            squares[5] === player
        )
            setGame(false);
        else if (
            squares[6] === player &&
            squares[7] === player &&
            squares[8] === player
        )
            setGame(false);
    }

    function checkDiagonals() {
        if (
            squares[0] === player &&
            squares[4] === player &&
            squares[8] === player
        )
            setGame(false);
        else if (
            squares[2] === player &&
            squares[4] === player &&
            squares[6] === player
        )
            setGame(false);
    }

    function reset() {
        setSquares(Array(9).fill(null));
        setPlayer("X");
        setGame(true);
    }

    return (
        <>
            <div className="grid grid-cols-3 w-10/12 mx-auto">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
}
