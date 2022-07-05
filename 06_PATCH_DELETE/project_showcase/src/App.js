import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  },[]);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const editProject = () => {

  } 

  const onDeleteProject = () => {

  }

  const enterProjectEditMode = () => {

  }

  

  const renderForm = () => {
  
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm updateProjects={onAddProject}/>
      <ProjectList
        projects={projects}
      />
    </div>
  );
};

export default App;
