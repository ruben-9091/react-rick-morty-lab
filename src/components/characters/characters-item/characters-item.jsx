import { Link } from "react-router-dom"

function CharactersItem({ character }) {
  return (
    <div className="card d-flex flex-column mb-3" style={{width: "18rem"}}>
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-text">{character.status}.</p>
        <p className="card-text">{character.species}.</p>
      </div>
      <Link to={`/character/${character.id}`} className="btn btn-secondary mt-2 m-2"> Ver detalle </Link> 
    </div>
  );
}

export default CharactersItem;