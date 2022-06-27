import ProjectListItem from "./ProjectListItem";
import { useState } from "react";

const ProjectList = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const projectListItems = searchResults.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
