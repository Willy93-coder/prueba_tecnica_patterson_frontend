"use client";

import { CardDetail } from "@/components/card-detail/card-detail";
import { fetchCharacterDetail } from "@/lib/fetch-data/fetch-character-detail";
import { fetchSingleEpisode } from "@/lib/fetch-data/fetch-single-episode";
import { CharacterModel } from "@/lib/models/character-model";
import { useEffect, useState } from "react";

export default function CharacterDetails({
  params,
}: {
  params: { characterId: number };
}) {
  const [character, setCharacter] = useState<CharacterModel | undefined>();
  const [debutEpisode, setDebutEpisode] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const characterDetail = await fetchCharacterDetail(params.characterId);
        if (characterDetail) {
          setCharacter(characterDetail);
          const episode = await fetchSingleEpisode(characterDetail.episode[0]);
          if (episode) setDebutEpisode(episode.name);
        }
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }
    fetchCharacter();
  }, [params.characterId]);

  if (error) return <p>{`${error}`}</p>;

  return (
    <>
      {character && debutEpisode && (
        <div>
          <h2 className="text-4xl mb-6 text-center">Detalles del personaje</h2>
          <CardDetail
            name={character.name}
            image={character.image}
            origin={character.origin.name}
            gender={character.gender}
            species={character.species}
            status={character.status}
            firstEpisode={debutEpisode}
          />
        </div>
      )}
    </>
  );
}
