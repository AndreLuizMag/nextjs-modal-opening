import api from "./pokeapi";
import { PokemonList } from "@/type/pokemon";

export const fetchPokemons = async (): Promise<PokemonList> => {
  const response = await api.get("/pokemon");
  return response.data;
};
