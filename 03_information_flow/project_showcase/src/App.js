import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
 const [projects, setProjects] = useState([]) 
 const [isDarkMode, setIsDarkMode] = useState(true);


  const handleClick = () => {
    //Add click handler to fetch projects
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleLikes = (id) => {
    const newArray = projects.map(project => {
      const projCopy = {...project}
      if(project.id === id){
        projCopy.likes = projCopy.likes+1
      }
      return projCopy
    })
    setProjects(newArray)
  }

  return (
    <div className={isDarkMode?"App":"App light"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} handleLikes={handleLikes}/>
    </div>
  );
};

export default App;
