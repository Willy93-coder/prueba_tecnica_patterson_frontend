"use client";

type SharedEpisodeListProps = {
  episodes: string[];
};

export function SharedEpisodeList({ episodes }: SharedEpisodeListProps) {
  return (
    <div className="grid justify-items-center">
      <ul>
        {episodes.map((episode) => (
          <li key={episode} className="text-lg">
            {episode}
          </li>
        ))}
      </ul>
    </div>
  );
}
