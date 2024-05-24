import { PokemonListResults } from "@/type/pokemon";
import React from "react";
import { PokeList } from "../PokeList";
import { testGetPokemons } from "@/lib/PokeAPI";

export const GetPokemons = async () => {
  const pokemons = await testGetPokemons();

  return (
    <>
      {pokemons.map((pokemon: PokemonListResults) => (
        <PokeList.Item key={pokemon.name} href={`/${pokemon.name}`}>
          {pokemon.name}
        </PokeList.Item>
      ))}
    </>
  );
};
