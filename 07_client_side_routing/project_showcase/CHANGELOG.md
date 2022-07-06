# Changes Since Advanced HTTP Requests Lecture

## Add `<Home />` component

```jsx
// src/components/Home.js
import { useEffect, useState } from "react";

function Home() {
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    // fetch the 3 most recently added projects from json-server
    fetch("http://localhost:4000/projects?_sort=id&_order=desc&_limit=3")
      .then((r) => r.json())
      .then((recentProjects) => {
        setRecentProjects(recentProjects);
      });
  }, []);

  return (
    <section className="box">
      <h2 style={{ fontSize: "3rem" }}>View Awesome Projects.</h2>
      <p>
        Looking for someone to hire? Check out these awesome projects from
        Flatiron students.
      </p>
      <h3>Recent Projects:</h3>
      {recentProjects.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
      <div style={{ margin: "1rem 0" }}>
        <a className="button" href="/projects">
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default Home;
```

Add some css for the box:

```css
.box {
  border: 2px solid var(--dark-turquoise);
  padding: 1.75rem;
}
```

Add a selector to the styles being applied to buttons currently so that we can apply the button class to a link and get the same result:

```css
/* buttons */
.button,
button {
  padding: 0.5rem 0.75rem;
  border: none;
  font: inherit;
  font-weight: 600;
  color: inherit;
  cursor: pointer;
  color: var(--primary);
  background-color: var(--background);
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;
}

.button.active,
.button:hover,
button.active,
button:focus,
button:hover {
  outline: none;
  /* color: var(--white); */
  background-color: var(--blue);
  border: 2px solid var(--primary);
}
```

Add some styles for the header (used for the branding of the site) so that the underline isn't present on hovering. Also add some styles for the links we added for navigation

```css
nav {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.navigation * {
  margin: 0 0.5rem;
}

header h1 a {
  border-bottom: none;
}

header h1 a:hover {
  border-bottom: none;
  background-color: transparent;
}

.logo {
  color: var(--turquoise);
  font-size: 1.25em;
  font-family: Helvetica;
  margin-right: 0.5rem;
}
```

## Add styles for ProjectDetail to ensure image large images don't overflow

```css
.project-image img {
  width: 100%;
  max-width: 1000px;
  display: block;
  margin-bottom: 2rem;
}
```

## Add a ProjectDetail component

```js
// src/components/ProjectDetail.js
import React, { useEffect, useState } from "react";

function ProjectDetail() {
  const [claps, setClaps] = useState(0);
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const id = 1;

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { image, name, about, link, phase } = project;

  function handleClapClick() {
    setClaps((claps) => claps + 1);
  }

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
}

export default ProjectDetail;
```

## Add ProjectDetail to App.js

In the App.js file, I've imported the `ProjectDetail` and `Home` components and then proceeded to added them to the JSX.

```jsx
return (
  <div className={isDarkMode ? "App" : "App light"}>
    <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
    <Home />
    {renderForm()}
    <button onClick={() => fetchProjects()}>
      <BiRefresh />
    </button>
    <ProjectList
      projects={projects}
      enterProjectEditModeFor={enterProjectEditModeFor}
      onDeleteProject={onDeleteProject}
      onUpdateProject={onUpdateProject}
    />
    <ProjectDetail />
  </div>
);
```

Add Navigation Links to `Header.js`

```jsx
// src/components/Header.js
return (
  <header>
    <nav>
      <h1 className="branding">
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <div className="navigation">
        <a className="button" href="/projects">
          All Projects
        </a>
        <a className="button" href="/projects/new">
          Add Project
        </a>
        <button onClick={handleClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  </header>
);
```
