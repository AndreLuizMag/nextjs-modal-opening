import { Suspense } from "react";
import { PokeList } from "@/components/PokeList";
import Loading from "./loading";
import { GetPokemons } from "@/components/GetPokemons";

const Home = async () => {
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
            <Suspense fallback={<Loading />}>
              <GetPokemons />
            </Suspense>
          </PokeList.List>
        </div>
      </section>
    </main>
  );
};

export default Home;
