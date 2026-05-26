import CharactersItem from "../characters-item/characters-item";
import { useState, useEffect } from "react";
import * as RMcharacters from "../../../services/rm-service";

function CharacterList() {
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
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {characters.map((character) => (
        <CharactersItem key={character.id} character={character} />
      ))}
    </div>
  );
}
export default CharacterList;

