import React, { useState } from "react";
import rockImg from "/images/rock.png";
import paperImg from "/images/paper.png";
import scissorsImg from "/images/scissors.png";

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "Rock";
    if (num === 2) return "Paper";
    if (num === 3) return "Scissors";
}

function checkResult(cpuChoice, player) {
    if (cpuChoice === player) {
        return { text: `Draw!`, result: 0 };
    } else if (
        (cpuChoice === "Rock" && player === "Paper") ||
        (cpuChoice === "Paper" && player === "Scissors") ||
        (cpuChoice === "Scissors" && player === "Rock")
    ) {
        return { text: `You win! ${player} beats ${cpuChoice}`, result: 1 };
    } else {
        return { text: `You lose! ${cpuChoice} beats ${player}`, result: -1 };
    }
}

export default function RockPaperScissors() {
    const [playerScore, setPlayerScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    const [gameText, setGameText] = useState("Rock, paper or scissors?");
    const [modalStyle, setModalStyle] = useState("none");
    const [modalText, setModalText] = useState("");

    function resetGame() {
        setPlayerScore(0);
        setCpuScore(0);
        setGameText("Rock, paper or scissors?");
    }

    function handleImageClick(playerSelection) {
        const cpuChoice = getComputerChoice();
        const { text, result } = checkResult(cpuChoice, playerSelection);
        setGameText(text);
        if (result === 1) {
            setPlayerScore(playerScore + 1);
        } else if (result === -1) {
            setCpuScore(cpuScore + 1);
        }
        if (playerScore === 4) {
            setModalText(
                `You win with a score of ${playerScore + 1} - ${cpuScore}!`
            );
            setModalStyle("block");
            resetGame();
        } else if (cpuScore === 4) {
            setModalText(
                `You lost with a score of ${playerScore} - ${cpuScore + 1}!`
            );
            setModalStyle("block");
            resetGame();
        }
    }

    function handleCloseModal() {
        setModalStyle("none");
    }

    return (
        <div
            className="flex flex-col items-center text-lg"
            onClick={modalStyle === "block" && handleCloseModal}
        >
            <h1 className="font-signature mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                RockPaperScissors!
            </h1>
            <div className="flex flex-col items-center gap-4 bg-transparent/50 p-4 w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 border-4 border-black rounded-lg">
                <div className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {playerScore} - {cpuScore}
                </div>
                <div className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    {gameText}
                </div>
                <div
                    id="myModal"
                    className="fixed bg-transparent/90 px-12 py-8 rounded-lg "
                    style={{ display: modalStyle }}
                >
                    <div className="flex flex-col">
                        <span className="ms-auto" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <p className="popup">{modalText}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-2 mt-4">
                <button
                    className="w-20 sm:w-24 md:w-28 lg:w-32 bg-transparent/20 rounded-lg border-4 border-black hover:bg-transparent/25 active:bg-transparent/30"
                    onClick={() => handleImageClick("Rock")}
                >
                    <img data-choice="Rock" src={rockImg} alt="Rock" />
                </button>
                <button
                    className="w-20 sm:w-24 md:w-28 lg:w-32 bg-transparent/20 rounded-lg border-4 border-black hover:bg-transparent/25 active:bg-transparent/30"
                    onClick={() => handleImageClick("Paper")}
                >
                    <img data-choice="Paper" src={paperImg} alt="Paper" />
                </button>
                <button
                    className="w-20 sm:w-24 md:w-28 lg:w-32 bg-transparent/20 rounded-lg border-4 border-black hover:bg-transparent/25 active:bg-transparent/30"
                    onClick={() => handleImageClick("Scissors")}
                >
                    <img
                        data-choice="Scissors"
                        src={scissorsImg}
                        alt="Scissors"
                    />
                </button>
            </div>
        </div>
    );
}
