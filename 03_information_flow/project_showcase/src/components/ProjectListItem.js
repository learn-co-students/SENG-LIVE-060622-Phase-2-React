
// project {id:1, name: 'proj name', image: 'bleh.png', like:'somelink.com', phase:'phase-2', likes:0}
const ProjectListItem = ({ id, about, image, link, name, phase, likes, handleLikes }) => {

   const handleClap = () => handleLikes(id)

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps" >
          👏{likes}
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
      </footer>
    </li>
  );
}

export default ProjectListItem;
