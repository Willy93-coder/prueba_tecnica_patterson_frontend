import { CharactersListLayout } from "./components/characters-list/characters-list-layout";
import { CharactersSharedEpisodeLayout } from "./components/characters-shared-episodes/characters-shared-episode-layout";

export default function Home() {
  return (
    <div className="">
      <main className="grid justify-items-center max-w-6xl">
        <h2 className="m-4 text-2xl font-semibold text-balance">
          Lista de personajes Rick & Morty
        </h2>
        <CharactersListLayout />
        <h2 className="m-4 text-2xl font-semibold text-balance">
          Ver lista de personajes que comparten episodio
        </h2>
        <CharactersSharedEpisodeLayout />
      </main>
    </div>
  );
}
