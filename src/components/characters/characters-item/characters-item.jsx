import { Link } from "react";
import './characters-item.css'

function CharactersItem ({ character }, ) {
    return (
            <div className="CharactersItem" onClick={(event) => getCharacter(event.target.value)}>
                <div className="CharactersItem_ImageContainer">
                    <img src={character.image} alt={character.name}/>
                </div>
                <div className="CharactersItem_InfoContainer">
                    <h4>{character.name}</h4>
                    <p>{character.status} - {character.species}</p>
                </div>
            </div>
    )
}

export default CharactersItem;