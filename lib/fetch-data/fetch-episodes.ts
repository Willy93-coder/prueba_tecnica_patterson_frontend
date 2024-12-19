import { env } from "@/env";

export async function fetchEpisodes() {
  const res = await fetch(env.NEXT_PUBLIC_RICK_AND_MORTY_All_EPISODE_URL);
  if (!res.ok) throw new Error("Error to load all episodes");
  return await res.json();
}
