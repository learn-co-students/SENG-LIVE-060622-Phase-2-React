function ProjectItem({name, about, id, phase, link, image}){
    // const {name, about, id, phase, link,image} = project
    // console.log(name, about, id, phase, link, image)
    return(
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
                <button className="claps">0</button>
            </figure>

            <section>
                <h4>{name}</h4>
                <p>{about}</p>
                <a href={link}>Link</a>
            </section>
            <footer className="extra">
                <span className="badge blue">Phase {phase}</span>
            </footer>
            
        </li>
    )
}

export default ProjectItem