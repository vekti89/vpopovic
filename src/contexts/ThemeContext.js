import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(); 

export function ThemeProvider (props) {
    
    const [isDarkMode, setDarkMode] = useState(true);
    
    const toggleTheme = () => {
        setDarkMode(!isDarkMode)
    }

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}