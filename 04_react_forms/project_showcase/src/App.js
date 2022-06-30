import React, { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const addProject = (newProject) =>  {
    setProjects((projectsObj) => [...projectsObj, newProject])
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm addProject={addProject}/>
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
