import React from "react";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => setIsDarkMode(!isDarkMode);

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
