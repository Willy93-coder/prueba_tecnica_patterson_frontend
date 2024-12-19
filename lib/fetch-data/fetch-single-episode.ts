import { Episode, mapToEpisodeModel } from "../models/episode-model";

export async function fetchSingleEpisode(url: string): Promise<Episode> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error to load all episodes");
  const data = await res.json();
  return mapToEpisodeModel(data);
}
