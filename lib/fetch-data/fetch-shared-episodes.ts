"use client";

import { Episode, mapToEpisodeModel } from "../models/episode-model";
import { fetchCharacterDetail } from "./fetch-character-detail";
import { fetchEpisodes } from "./fetch-episodes";

export async function fetchSharedEpisodes(
  characterIds: number[]
): Promise<string[]> {
  const episodeShares = await findShareEpisodes(characterIds);
  const episodesIds = getEpisodesIds(episodeShares);
  return await getEpisodesNames(episodesIds);
}

async function findShareEpisodes(characterIds: number[]): Promise<string[]> {
  if (characterIds.length !== 2) throw new Error("Must be two characters");

  const [episodes1, episodes2] = await Promise.all([
    fetchCharacterDetail(characterIds[0]),
    fetchCharacterDetail(characterIds[1]),
  ]);

  const sharedEpisodes = episodes1.episode.filter((episode) =>
    episodes2.episode.includes(episode)
  );
  return sharedEpisodes;
}

function getEpisodesIds(episodesURL: string[]): string[] {
  return episodesURL
    .map((url) => url.split("/").pop())
    .filter((id): id is string => id !== undefined);
}

async function getEpisodesNames(episodesIds: string[]): Promise<string[]> {
  if (!episodesIds || episodesIds.length === 0) return [];
  const sharedEpisodes = await getAllEpisodes();

  const episodesMap = new Map(
    sharedEpisodes.map((episode) => [episode.id.toString(), episode.name])
  );
  const episodeNames = episodesIds
    .map((id) => episodesMap.get(id))
    .filter((name): name is string => name !== undefined);
  return episodeNames;
}

async function getAllEpisodes(): Promise<Episode[]> {
  const episodes = await fetchEpisodes();
  return episodes.results.map((episode: any) => {
    return mapToEpisodeModel(episode);
  });
}
