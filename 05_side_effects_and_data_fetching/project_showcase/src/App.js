import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Interval from "./components/Interval";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [click, setClick] = useState(0)
  const [vissible, setVissible] = useState(true)

  //Handle with useEffect
  useEffect(()=>{
    fetch("http://localhost:3000/projects")
    .then(res => res.json())
    .then(projects => setProjects(projects))
    // [] will only run during the first render 
  },[])
  
  useEffect(() => {
    console.log(`I was click ${click} times!`)
    return () => {
      console.log("Clean up phase")
    }
  },[click])


  const handleClick = () => {
    setClick(click+1)
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const addProject = (newProject) =>  {
    setProjects((projectsObj) => [...projectsObj, newProject])
  }
  const removeProject = (id) => {
    const filteredProject = projects.filter(project => project.id !== id)
    setProjects(filteredProject)
  }

  //remove project
  // [x] create a handler that will update project state by removing the project
  //   [x] use a filter to remove the project 
  // [x] Pass the handler to our Project List Item 
  // [x] add an delete with an onClick 
  // [x] pass the onClick our handler, which should take the project or project ID as a param


  // console.log(projects)
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      {vissible?<Interval/>:null}
      <button onClick={() => setVissible(!vissible)}>Hide</button>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <button onClick={handleClick}>{`Click ${click}`}</button>
      <ProjectForm addProject={addProject}/>
      <ProjectList projects={projects} removeProject={removeProject} />
    </div>
  );
};

export default App;
