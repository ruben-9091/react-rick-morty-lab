import axios from "axios";

const http = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});

const BASE_URL = "https://rickandmortyapi.com/api/character/avatar/"
function parseCharacter(character) {
    return {
        id: character.id,
        name: character.name,
        image: `${BASE_URL}${character.id}.jpeg`,
        status: character.status,
        species: character.species  
    }         
}

export async function listCharacters() {
    const { data } = await http.get('/character')
    return data.results?.map((character) => parseCharacter(character)) ?? [];
};

export async function detailCharacters({id}) {
    const { data } = await http.get(`/character/${id}`)
    return data.results?.map((character) => parseCharacter(character)) ?? [];
};

//https://rickandmortyapi.com/api/character/{id}