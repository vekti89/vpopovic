import "./NotFound.css";
import {Link} from "react-router-dom";

import { useContext } from 'react';
import {ThemeContext} from "./contexts/ThemeContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'

export default function NotFound () {
    const {isDarkMode} = useContext(ThemeContext);
    
    return (
        <main className="NotFound" style={{backgroundColor: isDarkMode ? "var(--main-bg-dark)" : "var(--main-bg-light)"}}>
            <div className="NotFound-content" style={{backgroundColor: isDarkMode ? "var(--box-bg-dark)" : "var(--box-bg-light)"}}>
                <h1>Page Not Found</h1>
                <h3>Looks like there's nothing here...</h3>
                <Link to="/"><button> GO HOME <FontAwesomeIcon icon={faArrowCircleLeft} className="icon"/></button></Link>
            </div>
        </main>
    )
}