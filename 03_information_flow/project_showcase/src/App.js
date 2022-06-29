import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  //Move darkMode to app

  const handleClick = () => {
    //Add click handler to fetch projects
  };

  //Create a toggle method for darkMode

  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <button >Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
