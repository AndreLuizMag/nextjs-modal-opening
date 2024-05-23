import Modal from "@/components/Modal";
import { Suspense } from "react";
import { PokeCard } from "@/components/PokeCard";
import { FetchPokemon } from "@/components/FetchPokemon";
import Loading from "./loading";

type Props = {
  params: {
    name: string;
  };
};

const PokemonDetailsPage = ({ params }: Props) => {
  const { name } = params;

  return (
    <Modal>
      <PokeCard.Card>
        <PokeCard.Title>{name}</PokeCard.Title>
        <Suspense fallback={<Loading />}>
          <FetchPokemon name={name} />
        </Suspense>
      </PokeCard.Card>
    </Modal>
  );
};

export default PokemonDetailsPage;
