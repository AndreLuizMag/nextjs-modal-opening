import React, { HTMLAttributes } from "react";
import { PokeCard } from "../PokeCard";
import { fetchPokemon } from "@/lib/PokeAPI";
import { Pokemon } from "@/type/pokemon";
import { notFound } from "next/navigation";

interface FetchPokemonProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const FetchPokemon = async ({ name }: FetchPokemonProps) => {
  const pokemonDetails: Pokemon | null = await fetchPokemon({ name });

  if (!pokemonDetails) {
    return notFound();
  }

  return (
    <>
      <PokeCard.Image
        src={pokemonDetails.sprites.front_default}
        alt={pokemonDetails.name}
      />
      <div className="ds-flex flow-col-nw gap-xs">
        <PokeCard.Info name="ID">{pokemonDetails.id}</PokeCard.Info>
        <PokeCard.Info name="Height">{pokemonDetails.height}</PokeCard.Info>
        <PokeCard.Info name="Weight">{pokemonDetails.weight}</PokeCard.Info>
      </div>
    </>
  );
};
