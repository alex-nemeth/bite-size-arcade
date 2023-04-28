import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/">
            <div className="flex items-center">
                <img
                    src="/images/logo.png"
                    alt="ByteSizeArcade Logo"
                    className="w-10 mr-2"
                />
                <a className="font-signature">ByteSizeArcade</a>
            </div>
        </Link>
    );
}
