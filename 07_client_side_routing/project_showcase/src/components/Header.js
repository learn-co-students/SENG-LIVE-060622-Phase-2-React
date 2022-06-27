import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <nav>
      <Link to="/" style={{borderBottom: "none"}}>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
        </Link>
        <div className="navigation">
          <NavLink className="button" exact to="/projects">
            All Projects
          </NavLink>
          <NavLink className="button" exact to="/projects/new">
            Add Project
          </NavLink>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
