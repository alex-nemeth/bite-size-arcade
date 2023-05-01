import React, { useState, useEffect } from "react";

export default function Die(props) {
    return (
        <div
            className={`h-12 aspect-square shadow-md rounded-md flex justify-center items-center cursor-pointer hover:shadow-lg transition-all  ${
                props.die.isHeld ? "bg-green-300" : "bg-white"
            }
            }
            }`}
            onClick={() => props.handleClick(props.die.id)}
        >
            <h2 className="text-3xl font-semibold font-mono">
                {props.die.value}
            </h2>
        </div>
    );
}
