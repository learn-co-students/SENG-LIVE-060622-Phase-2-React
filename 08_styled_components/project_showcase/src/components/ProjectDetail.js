import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const [claps, setClaps] = useState(0);
  const [project, setProject] = useState(null);
 console.log(useParams)
 console.log(useParams())
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
      });
  }, [id]);


  const handleClapClick = () => {
    setClaps((claps) => claps + 1);
  }

  if(!project) return <h1>Loading</h1>

  const { image, name, about, link, phase } = project;


  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleClapClick}>
            👏{claps}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null}
          <div className="extra">
            <span className="badge blue">Phase {phase}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
