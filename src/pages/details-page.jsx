import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacter } from "../services/rm-service";

function DetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter(id).then((character) => setCharacter(character));
  }, [id]);

  if (!character) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="card d-flex flex-row mb-3" style={{ width: "18rem" }}>
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-text">{character.status}.</p>
        <p className="card-text">{character.species}.</p>
        <p className="card-text">{character.gender}.</p>
        <p className="card-text">{character.origin}.</p>
      </div>
      <Link
        to="/character"
        className="btn btn-secondary btn-sm d-block mx-auto mt-3"
      >
        {" "}
        ATRAS{" "}
      </Link>
    </div>
  );
}

export default DetailPage;
