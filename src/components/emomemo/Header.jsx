import React from "react";

export default function Header({ score, best }) {
    return (
        <nav className="flex flex-row justify-between items-center px-5">
            <div className="flex justify-center items-center">
                <img className="w-16" src="/images/emomemo/cool.png" alt="" />
                <h1 className="text-3xl">Emomemo</h1>
            </div>
            <div>
                <h3 className="text-xl">Current Score: {score}</h3>
                <h3 className="text-xl">Best Score: {best}</h3>
            </div>
        </nav>
    );
}
