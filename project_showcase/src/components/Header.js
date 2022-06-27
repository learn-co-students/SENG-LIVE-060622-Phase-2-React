import React from "react";
import { useState } from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const handleClick = () => onToggleDarkMode();

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
