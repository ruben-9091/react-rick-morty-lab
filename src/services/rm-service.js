import axios from "axios";

const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
const BASE_URL_IMG = "https://rickandmortyapi.com/api/character/avatar/";
function parseCharacter(character) {
  return {
    id: character.id,
    name: character.name,
    image: `${BASE_URL_IMG}${character.id}.jpeg`,
    status: character.status,
    species: character.species,
    gender: character.gender, 
    origin: character.origin.name,
  };
}

export async function listCharacters() {
  const { data } = await http.get("/character");
  return data.results?.map((character) => parseCharacter(character)) ?? [];
}

export async function getCharacter(id) {
    const { data } = await http.get(`/character/${id}`)
    return parseCharacter(data); 
};