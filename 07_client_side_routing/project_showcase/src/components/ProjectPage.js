import ProjectList from "./ProjectList";
import ProjectDetail from "../components/ProjectDetail";
import { Route, useRouteMatch } from "react-router-dom";

const ProjectPage = ({ projects }) => {
  const match = useRouteMatch();

  return (
    <div>
      <ProjectList projects={projects} />

      <Route path={`${match.url}/:projectId`}>
        <ProjectDetail />
      </Route>
    </div>
  );
};

export default ProjectPage;
