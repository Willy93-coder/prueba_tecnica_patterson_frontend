"use client";

import { useState } from "react";
import { Episode } from "./characters-shared-episode-layout";
import { getSharedNameEpisodesList } from "./get-shared-episodes";

type SharedEpisodeListProps = {
  charactersId: number[];
  episodes: Episode[];
};

export function SharedEpisodeList({
  charactersId,
  episodes,
}: SharedEpisodeListProps) {
  const [sharedEpisodeList, setSharedEpisodeList] = useState<string[]>([]);

  function populateEpisodeList() {
    const episodesArr = getSharedNameEpisodesList(charactersId, episodes);
    setSharedEpisodeList(episodesArr);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          populateEpisodeList();
        }}
        className="border bg-black text-white px-4 py2"
      >
        Print List
      </button>
      {sharedEpisodeList.map((episode) => (
        <ul>
          <li>{episode}</li>
        </ul>
      ))}
    </div>
  );
}
