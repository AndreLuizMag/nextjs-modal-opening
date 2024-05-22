import api from "./pokeapi";
import { Pokemon } from "@/type/pokemon";

export const fetchPokemonDetails = async (
  name: string
): Promise<Pokemon | null> => {
  try {
    const response = await api.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    return null;
  }
};
