import axios from "axios";

export async function getAllPokemon() {
  try {
    const response = await axios.get("https://pokemon-api-six-delta.vercel.app/api/pokemon/");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return { message: error };
  }
}

export async function getPokemonById(number) {
  try {
    if (toString(number).length > 0) {
      const response = await axios.get(
        "https://pokemon-api-six-delta.vercel.app/api/pokemon/" + number
      );
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.error(error);
    return { message: error };
  }
}
