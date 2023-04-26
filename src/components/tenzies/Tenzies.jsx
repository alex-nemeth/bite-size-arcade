import React, { useState, useEffect } from "react";
import "./tenzies.css";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Tenzies() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [count, setCount] = useState(0);
    const [personalBest, setPersonalBest] = useState(
        localStorage.getItem("pb") ? localStorage.getItem("pb") : 999
    );
    const [prevPB, setPrevPB] = useState(
        localStorage.getItem("prevPB") ? localStorage.getItem("prevPB") : 999
    );

    useEffect(() => {
        const heldValue = dice[0].value;
        const allHeld = dice.every((die) => die.isHeld);
        const allSameValue = dice.every((die) => die.value === heldValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
            if (personalBest > count) {
                setPrevPB(personalBest);
                setPersonalBest(count);
                localStorage.setItem("pb", count);
                localStorage.setItem("prevPB", prevPB);
            } else {
                setPrevPB(personalBest);
                localStorage.setItem("prevPB", prevPB);
            }
        }
    }, [dice]);

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        const arr = [];
        while (arr.length < 10) arr.push(generateNewDie());
        return arr;
    }

    function rollDice() {
        setDice((prevState) =>
            prevState.map((die) => {
                return die.isHeld ? die : generateNewDie();
            })
        );
        setCount(count + 1);
    }

    function holdDice(id) {
        setDice((prevState) =>
            prevState.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        );
    }

    function restartGame() {
        setDice(allNewDice());
        setTenzies(false);
        setCount(0);
    }

    const diceArray = dice.map((die, i) => {
        return <Die die={die} key={nanoid()} handleClick={holdDice} />;
    });

    return (
        <div className="flex flex-col justify-center items-center">
            <main className="flex flex-col justify-evenly items-center bg-gray-100 p-8 rounded-md">
                {tenzies && personalBest < prevPB && <Confetti />}
                <h1 className="text-4xl text-black">Tenzies</h1>
                <p className="text-gray-800 mt-0 text-center min-h-min">
                    {count > 0 && "Rolls: " + count}
                    <br />
                    {personalBest < 999
                        ? "Personal Best: " + personalBest
                        : count === 0 &&
                          "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
                    <br />
                    {tenzies &&
                        personalBest < prevPB &&
                        "Congratulations! New personal best!"}
                </p>
                <div className="text-black grid grid-cols-5 gap-4">
                    {diceArray}
                </div>
                <button
                    className="bg-blue-600 px-4 py-2 text-xl rounded-md mt-6 hover:bg-blue-700 transition-all active:shadow-inner active:shadow-lg"
                    onClick={tenzies ? restartGame : rollDice}
                >
                    {tenzies ? "Play Again" : "Roll"}
                </button>
                <p></p>
            </main>
        </div>
    );
}
