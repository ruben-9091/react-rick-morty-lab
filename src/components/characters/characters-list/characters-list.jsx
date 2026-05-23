import { useState, useEffect } from "react";
import * as RMcharacters from "../../../services/rm-service";
import CharactersItem from "../characters-item/characters-item";
import "./characters-list.css";

function getCharacter(id) {
    
}

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const characters = await RMcharacters.listCharacters();
        setCharacters(characters);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <div className="CharactersList">
      {characters.map((character) => (
        <CharactersItem key={character.id} character={character} />
      ))}
    </div>
  );
}
export default CharactersList;
