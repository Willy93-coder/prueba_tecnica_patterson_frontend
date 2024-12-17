"use client";
import { Episode } from "./characters-shared-episode-layout";

export function getSharedNameEpisodesList(
  charactersId: number[],
  episodes: Episode[]
) {
  const namesEpisode: string[] = [];
  const episodeArr = getSharedEpisodes(charactersId, episodes);
  episodeArr.forEach((episode) => {
    episodes.forEach((epi) => {
      if (epi.characters.includes(episode)) {
        namesEpisode.push(epi.name);
      }
    });
  });
  return namesEpisode;
}

function getSharedEpisodes(charactersId: number[], episodes: Episode[]) {
  let episodesArr: string[] = [];
  episodes.forEach((episode) => {
    episodesArr = episode.characters.filter(
      (episode) =>
        episode.includes(charactersId[0].toString()) &&
        episode.includes(charactersId[1].toString())
    );
  });
  return episodesArr;
}
