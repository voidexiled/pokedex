import axios from "axios";

export async function getAllPokemon() {
  try {
    const response = await axios.get(
      "http://pokedex-api-production-a04c.up.railway.app/pokemon/"
    );
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
        "http://pokedex-api-production-a04c.up.railway.app/pokemon/" + number
      );
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.error(error);
    return { message: error };
  }
}
