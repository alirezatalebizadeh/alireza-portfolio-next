"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "dark"; 
        }
        return "dark";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <button onClick={toggleTheme}>
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    );
};

export default ThemeToggle;
