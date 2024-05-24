import ModalOld from "@/components/ModalOld";
import { Suspense } from "react";
import { PokeCard } from "@/components/PokeCard";
import { FetchPokemon } from "@/components/FetchPokemon";
import Loading from "./loading";

type Props = {
  params: {
    name: string;
  };
};

const Pokemon = ({ params }: Props) => {
  const { name } = params;

  return (
    <ModalOld>
      <PokeCard.Card>
        <PokeCard.Title>{name}</PokeCard.Title>
        <Suspense fallback={<Loading />}>
          <FetchPokemon name={name} />
        </Suspense>
      </PokeCard.Card>
    </ModalOld>
  );
};

export default Pokemon;
