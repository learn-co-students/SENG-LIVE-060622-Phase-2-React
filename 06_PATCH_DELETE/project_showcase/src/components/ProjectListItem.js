import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ project, enterProjectEditModeFor }) => {
  const { id, image, about, name, link, phase } = project;

  const [clapCount, setClapCount] = useState(0);

  const handleClap = (clapCount) => setClapCount(clapCount + 1);

  const handleEditClick = () => {
    enterProjectEditModeFor(id);
  };

  const handleDeleteClick = () => {};

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
