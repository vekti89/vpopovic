import React from "react";
import "./ToggleSwitch.css";
import { useContext } from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

function ToggleSwitch() {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;