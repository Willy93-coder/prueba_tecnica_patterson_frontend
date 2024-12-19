"use client";

import { Card } from "@/components/card/card";
import { fetchCharactersList } from "@/lib/fetch-data/fetch-characters-list";
import { CharacterModel } from "@/lib/models/character-model";
import Link from "next/link";
import { useEffect, useState } from "react";
import { env } from "@/env";
import { Pagination } from "@/components/pagination/pagination";

export default function CharactersListLayout() {
  const [characterList, setCharacterList] = useState<CharacterModel[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const characterList = await fetchCharactersList(
          env.NEXT_PUBLIC_RICK_AND_MORTY_All_CHARACTERS_URL
        );
        if (characterList) {
          setCharacterList(characterList.results);
          setNextPage(characterList.info.next);
          setPrevPage(characterList.info.prev);
        }
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }
    fetchCharacters();
  }, []);

  async function loadCharacters(pageURL: string | null) {
    if (!pageURL) return;
    const data = await fetchCharactersList(pageURL);
    setCharacterList(data.results);
    setNextPage(data.info.next);
    setPrevPage(data.info.prev);
  }

  if (error) return <p>{`${error}`}</p>;
  return (
    <>
      <h2 className="m-4 text-2xl font-semibold text-balance text-center">
        Lista de personajes Rick & Morty
      </h2>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {characterList.map((character) => (
          <Link
            key={character.id}
            href={`/characters/${character.id}`}
            className="hover:scale-125"
          >
            <Card name={character.name} image={character.image} />
          </Link>
        ))}
      </section>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        onPageChange={loadCharacters}
      />
    </>
  );
}
