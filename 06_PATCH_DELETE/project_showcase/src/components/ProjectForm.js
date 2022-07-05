import { useState, useEffect } from "react";

const ProjectForm = ({ updateProjects, projectID }) => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  });

  useEffect(()=>{
    if(projectID){
      fetch(`http://localhost:3000/projects/${projectID}`)
      .then(res => res.json())
      .then(project => setFormData(project))
    }
  },[projectID])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: !projectID?"POST":"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(!projectID?{ ...formData, claps: 0 }:{...formData}),
    };

    fetch(!projectID?"http://localhost:3000/projects":`http://localhost:3000/projects/${projectID}`, configObj)
      .then((resp) => resp.json())
      .then((project) => {
        updateProjects(project);
        setFormData({
          name: "",
          about: "",
          phase: "",
          link: "",
          image: "",
        });
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>{!projectID?"Add New Project":"Edit Project"}</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formData.about}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          onChange={handleChange}
          value={formData.phase}
        >
          <option value="">Pick a Phase</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleChange}
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <button type="submit">{!projectID?"Add Project":"Update Project"}</button>
      </form>
    </section>
  );
};

export default ProjectForm;
