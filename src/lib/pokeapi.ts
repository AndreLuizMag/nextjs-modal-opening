import axios from "axios";
import { PokemonList, PokemonListResults, Pokemon } from "@/type/pokemon";

// #region => API Config
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
// #endregion

// #region => List all Pokemons
interface getPokemonsParams {
  offset?: number;
  limit?: number;
}

export const testGetPokemons = () => {
  const data = [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
  ];

  return data;
};

export const getPokemons = async ({
  offset = 0,
  limit = 20,
}: getPokemonsParams = {}): Promise<PokemonList> => {
  const response = await api.get(`/pokemon`, {
    params: {
      offset,
      limit,
    },
  });
  return response.data;
};
// #endregion

// #region => Fetch a pokemon per name
interface fetchPokemonParams {
  name: string;
}

export const fetchPokemon = async ({
  name,
}: fetchPokemonParams): Promise<Pokemon | null> => {
  try {
    const response = await api.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          `Error fetching Pokémon details: ${error.response.status} - ${error.response.statusText}`
        );
      } else if (error.request) {
        console.error(
          "Error fetching Pokémon details: No response received from server"
        );
      } else {
        console.error(`Error fetching Pokémon details: ${error.message}`);
      }
    } else {
      console.error("Error fetching Pokémon details:", error);
    }
    return null;
  }
};
// #endregion
