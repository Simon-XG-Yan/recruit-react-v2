import React from "react";
import * as styles from "./Header.module.scss";


interface HeaderProps {
    view: "register" | "menu";
    onMenuClick: () => void;
    onBackClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ view, onMenuClick, onBackClick }) => {
    return (
        <header>
            {view === "register"? (
                <button aria-label="Open Menu" onClick={onMenuClick}>
                    register
                </button>
            ) : (
                <button aria-label="Go Back" onClick={onBackClick}>
                    back
                </button>
            )}
            <h1>
                {view === "register" ? "Register card form" : "Menu"}
            </h1>
        </header>
    )
}
