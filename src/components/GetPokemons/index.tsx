import { PokemonListResults } from "@/type/pokemon";
import React from "react";
import { PokeList } from "../PokeList";
import { getPokemons } from "@/lib/PokeAPI";

export const GetPokemons = async () => {
  const pokemons = await getPokemons({ offset: 0, limit: 10 });

  return (
    <>
      {pokemons.results.map((pokemon: PokemonListResults) => (
        <PokeList.Item key={pokemon.name} href={`/${pokemon.name}`}>
          {pokemon.name}
        </PokeList.Item>
      ))}
    </>
  );
};
