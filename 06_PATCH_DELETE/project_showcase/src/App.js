import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
//import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectID, setProjectID] = useState(false)


  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((resp) => resp.json())
      .then((projects) => {
        console.log(projects)
        setProjects(projects)});
  },[]);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const editProject = (updatedProj) => {
    setProjects(prevProjects => {
      const newProjArray = prevProjects.map(project => {
        if(project.id === updatedProj.id){
          return updatedProj
        } else {
          return project
        }
      })
      return newProjArray
    })
    setProjectID(false)

  } 

  const onDeleteProject = (id) => {
    console.log(id)
    setProjects(prevProjects => {
      const filteredArray = prevProjects.filter(project => project.id !== id)
      return filteredArray
    })
  }

  const enterProjectEditMode = (id) => {
    setProjectID(id)
  }

  

  const renderForm = () => {
    if(!projectID){
      return <ProjectForm updateProjects={onAddProject} projectID={projectID}/>
    } else {
      // return <ProjectEditForm projectID={projectID} editProject={editProject} />
      return <ProjectForm updateProjects={editProject} projectID={projectID}/>
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        onDeleteProject={onDeleteProject}
        enterProjectEditMode={enterProjectEditMode}
      />
    </div>
  );
};

export default App;
