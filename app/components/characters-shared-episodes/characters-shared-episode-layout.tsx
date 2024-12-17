"use client";
import { useEffect, useState } from "react";
import { fetchCharactersList } from "../characters-list/fetch-characters-list";
import { fetchEpisodes } from "./fetch-episodes";
import { CharactersDropdown } from "./characters-dropdown";
import { SharedEpisodeList } from "./shared-episode-list";

export type CharactersSharedEpisodeLayoutProps = {
  id: number;
  name: string;
};

export type Episode = {
  id: number;
  name: string;
  characters: string[];
};

export function CharactersSharedEpisodeLayout() {
  const [charactersList, setCharactersList] = useState<
    CharactersSharedEpisodeLayoutProps[] | null
  >([]);
  const [episodesList, setEpisodesList] = useState<Episode[]>([]);
  const [selectedCharacters] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const characterList = await fetchCharactersList();
        if (characterList) setCharactersList(characterList.results);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }
    async function fetchAllEpisodes() {
      try {
        const episodes = await fetchEpisodes();
        if (episodes) setEpisodesList(episodes.results);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }
    fetchCharacters();
    fetchAllEpisodes();
  }, []);

  function handleCharacterSelected(characterId: number) {
    selectedCharacters.push(characterId);
  }

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <CharactersDropdown
        characters={charactersList}
        onCharacterSelected={handleCharacterSelected}
      />
      <CharactersDropdown
        characters={charactersList}
        onCharacterSelected={handleCharacterSelected}
      />
      <SharedEpisodeList
        charactersId={selectedCharacters}
        episodes={episodesList}
      />
    </div>
  );
}
