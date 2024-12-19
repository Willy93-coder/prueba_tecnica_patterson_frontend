import { CharacterModel, mapToCharacterModel } from "../models/character-model";
import { env } from "@/env";

export async function fetchCharacterDetail(
  id: number
): Promise<CharacterModel> {
  const res = await fetch(
    `${env.NEXT_PUBLIC_RICK_AND_MORTY_All_CHARACTERS_URL}/${id}`
  );
  if (!res.ok) throw new Error("Error to load character detail");

  const data = await res.json();
  return mapToCharacterModel(data);
}
