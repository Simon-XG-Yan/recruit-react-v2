import React from "react";
import { FiMenu, FiArrowLeft } from "react-icons/fi";
import * as styles from "./Header.module.scss";


interface HeaderProps {
    view: "register" | "menu";
    onMenuClick: () => void;
    onBackClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ view, onMenuClick, onBackClick }) => {
    return (
        <header className={styles.header}>
            {view === "register"? (
                <button aria-label="Open Menu" onClick={onMenuClick} className={styles.menuButton}>
                    <FiMenu size={24} />
                </button>
            ) : (
                <button aria-label="Go Back" onClick={onBackClick} className={styles.backButton}>
                    <FiArrowLeft size={24} />
                </button>
            )}
            <h1 className={styles.title}>
                {view === "register" ? "Register card form" : "Menu"}
            </h1>
        </header>
    )
}
