import { FC, Suspense } from "react";
import Loading from "./loading";
import { PokemonList, PokemonListResults } from "@/type/pokemon";
import { Pokemon } from "@/components/Pokemon";
import { fetchPokemons } from "@/lib/fetchPokeList";
import { PokeList } from "@/components/PokeList";

const fetchData = async () => {
  const pokemonList = await fetchPokemons();
  return pokemonList;
};

const Home = async () => {
  const pokemonList = await fetchData();
  return (
    <main>
      <section className="p-block-16">
        <div className="container-md">
          <h1>Pokedex</h1>
        </div>
      </section>
      <section>
        <div className="container-md ds-flex flow-col-nw gap-md">
          <h2>List Pokemons</h2>
          <PokeList.List>
            <Suspense fallback={<PokeList.Skeleton />}>
              {pokemonList.results.map((pokemon: PokemonListResults) => (
                <PokeList.Item key={pokemon.name} href={`/${pokemon.name}`}>
                  {pokemon.name}
                </PokeList.Item>
              ))}
            </Suspense>
          </PokeList.List>
        </div>
      </section>
    </main>
  );
};

export default Home;
