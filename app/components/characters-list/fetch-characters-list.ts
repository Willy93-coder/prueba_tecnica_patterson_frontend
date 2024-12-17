export async function fetchCharactersList() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) throw new Error("Error to load all characters");
  return await res.json();
}
