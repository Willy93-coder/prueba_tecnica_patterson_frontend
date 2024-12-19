import { CharactersSharedEpisodeLayout } from "@/components/characters-shared-episodes/characters-shared-episode-layout";

export default function SharedAppearancesLayout() {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-semibold text-balance text-center">
        Ver lista de personajes que comparten episodio
      </h2>
      <CharactersSharedEpisodeLayout />
    </div>
  );
}
