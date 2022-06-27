import ProjectItem from './ProjectItem'
function ProjectList({projects}){
    // console.log(props)
    // console.log(props.projects)
    // console.log(props.cat)
    const projectListItems = projects.map((projectObj) => <ProjectItem key={projectObj.id} {...projectObj} />)
    

    return(
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
           <ul>{projectListItems}</ul>
        </section>
    )

}

export default ProjectList