"use client";

import { useEffect, useState } from "react";
import { fetchCharactersList } from "../../lib/fetch-data/fetch-characters-list";
import { Dropdown } from "../dropdown/dropdown";
import { SharedEpisodeList } from "./shared-episode-list";
import { Button } from "../button/button";
import { fetchSharedEpisodes } from "@/lib/fetch-data/fetch-shared-episodes";
import { env } from "@/env";
import { Pagination } from "../pagination/pagination";

export type CharactersSharedEpisodeLayoutProps = {
  id: number;
  name: string;
};

export function CharactersSharedEpisodeLayout() {
  const [charactersList, setCharactersList] = useState<
    CharactersSharedEpisodeLayoutProps[] | null
  >([]);
  const [charactersList2, setCharactersList2] = useState<
    CharactersSharedEpisodeLayoutProps[] | null
  >([]);
  const [selectedCharacters, setSelectedCharacters] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sharedEpisodeList, setSharedEpisodeList] = useState<string[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  async function populateEpisodeList() {
    const episodesArr = await fetchSharedEpisodes(selectedCharacters);
    setSharedEpisodeList(episodesArr);
  }

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const characterList = await fetchCharactersList(
          env.NEXT_PUBLIC_RICK_AND_MORTY_All_CHARACTERS_URL
        );
        if (characterList) {
          setCharactersList(characterList.results);
          setCharactersList2(characterList.results);
          setNextPage(characterList.info.next);
          setPrevPage(characterList.info.prev);
        }
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }
    fetchCharacters();
  }, []);

  function handleCharacterSelected(characterId: number, index: number) {
    setSelectedCharacters((prev) => {
      const updated = [...prev];
      updated[index] = characterId;
      return updated;
    });
  }

  async function loadCharacters(pageURL: string | null) {
    if (!pageURL) return;
    const data = await fetchCharactersList(pageURL);
    setCharactersList2(data.results);
    setNextPage(data.info.next);
    setPrevPage(data.info.prev);
  }

  if (error) return <p>{error}</p>;

  return (
    <section className="p-8 flex flex-col items-center">
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        onPageChange={loadCharacters}
      />
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        <Dropdown
          characters={charactersList}
          selectedCharacter={selectedCharacters[0]}
          index={0}
          onCharacterSelected={handleCharacterSelected}
        />
        <Dropdown
          characters={charactersList2}
          selectedCharacter={selectedCharacters[1]}
          index={1}
          onCharacterSelected={handleCharacterSelected}
        />
        <Button
          type="button"
          onClick={populateEpisodeList}
          text="Ver Episodios Compartidos"
          disabled={selectedCharacters.length !== 2}
        />
      </div>
      <SharedEpisodeList episodes={sharedEpisodeList} />
    </section>
  );
}
