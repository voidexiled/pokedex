import axios from "axios";

export async function getAllPokemon() {
  try {
    const response = await axios.get("http://localhost:3001/pokemon/");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return { message: error };
  }
}

export async function getPokemonById(number) {
  try {
    const response = await axios.get("http://localhost:3001/pokemon/" + number);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return { message: error };
  }
}
