import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Anchors from "./Anchors";
import Dropdown from "./Dropdown";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Navbar() {
    const { width } = useWindowDimensions();

    return (
        <nav className="flex flex-row justify-between mb-8 relative bg-transparent/50 py-2 w-full">
            <Logo />
            {width >= 820 ? <Anchors /> : <Dropdown />}
        </nav>
    );
}
