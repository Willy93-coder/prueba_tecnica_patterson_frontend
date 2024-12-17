import { CharactersSharedEpisodeLayoutProps } from "./characters-shared-episode-layout";

type CharactersDropdownProps = {
  characters: CharactersSharedEpisodeLayoutProps[] | null;
  onCharacterSelected: (characterId: number) => void;
};

export function CharactersDropdown({
  characters,
  onCharacterSelected,
}: CharactersDropdownProps) {
  return (
    <div>
      <select
        onChange={(e) => onCharacterSelected(Number(e.target.value))}
        defaultValue=""
      >
        {characters?.map((character) => (
          <option key={character.id} value={character.id}>
            {character.name}
          </option>
        ))}
      </select>
    </div>
  );
}
