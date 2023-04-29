import { useState, useEffect } from "react";
import Header from "./Header";
import Game from "./Game";

export default function Emomemo() {
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(null);
    const [clicked, setClicked] = useState([]);

    useEffect(() => {
        document.title = "Emomemo - ByteSizeArcade";
    }, []);

    function incrementScore() {
        setScore((prevScore) => prevScore + 1);
    }

    function addClicked(image) {
        if (!clicked.includes(image)) {
            setClicked((prevArray) => {
                prevArray.push(image);
                console.log(prevArray);
                return prevArray;
            });
            incrementScore();
            console.log(score);
            if (score === 15)
                alert("You found all 15 emojis! Congratulations!");
        } else {
            alert(
                `${image} was clicked twice! You lost with a score of ${score}.`
            );
            if (best < score) setBest(score);
            setScore(0);
            setClicked([]);
        }
    }

    return (
        <>
            <Header score={score} best={best} />
            <Game onPress={addClicked} />
        </>
    );
}
