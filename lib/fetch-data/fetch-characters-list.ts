export async function fetchCharactersList(pageUrl: string) {
  const res = await fetch(pageUrl);
  if (!res.ok) throw new Error("Error to load all characters");
  return await res.json();
}
