"use client";

import { useEffect, useState } from "react";
import { CharacterCard, CharacterCardProps } from "./character-card";
import { fetchCharactersList } from "./fetch-characters-list";

export function CharactersListLayout() {
  const [characterList, setCharacterList] = useState<CharacterCardProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const characterList = await fetchCharactersList();
        if (characterList) setCharacterList(characterList.results);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }
    fetchCharacters();
  }, []);

  if (error) return <p>{`${error}`}</p>;

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {characterList.map((character) => (
        <CharacterCard
          name={character.name}
          image={character.image}
          key={character.name}
        />
      ))}
    </section>
  );
}
