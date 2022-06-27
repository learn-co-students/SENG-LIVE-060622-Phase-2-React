import Header from "./components/Header"
import Form from "./components/Form"
import ProjectList from "./components/ProjectList"

import projectsData from "./projects"

function App() {
  return (
  <div className="App">
    <Header />
    <Form />
    <ProjectList projects={projectsData} cat="rose"/>
  </div>
  )
}

export default App;
