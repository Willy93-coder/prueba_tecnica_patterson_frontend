export async function fetchEpisodes() {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  if (!res.ok) throw new Error("Error to load all episodes");
  return await res.json();
}
