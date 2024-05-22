import { notFound } from "next/navigation";
import { fetchPokemonDetails } from "@/lib/fetchPokemon";
import { Pokemon } from "@/type/pokemon";
import Modal from "@/components/Modal";
import { Suspense } from "react";
import Loading from "./loading";
import { PokeCard } from "@/components/PokeCard";

type Props = {
  params: {
    name: string;
  };
};

const PokemonDetailsPage = async ({ params }: Props) => {
  const { name } = params;
  const pokemonDetails: Pokemon | null = await fetchPokemonDetails(name);

  if (!pokemonDetails) {
    return notFound();
  }

  return (
    <Modal>
      <PokeCard.Card>
        <Suspense fallback={<Loading />}>
          <PokeCard.Title>{pokemonDetails.name}</PokeCard.Title>
          <PokeCard.Image
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
          <div className="ds-flex flow-col-nw gap-xs">
            <PokeCard.Info name="ID">{pokemonDetails.id}</PokeCard.Info>
            <PokeCard.Info name="Height">{pokemonDetails.height}</PokeCard.Info>
            <PokeCard.Info name="Weight">{pokemonDetails.weight}</PokeCard.Info>
          </div>
        </Suspense>
      </PokeCard.Card>
    </Modal>
  );
};

export default PokemonDetailsPage;
