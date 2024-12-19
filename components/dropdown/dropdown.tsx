import { CharactersSharedEpisodeLayoutProps } from "../characters-shared-episodes/characters-shared-episode-layout";

type DropdownProps = {
  characters: CharactersSharedEpisodeLayoutProps[] | null;
  onCharacterSelected: (characterId: number, index: number) => void;
  selectedCharacter: number | undefined;
  index: number;
};

export function Dropdown({
  characters,
  onCharacterSelected,
  selectedCharacter,
  index,
}: DropdownProps) {
  return (
    <div>
      <select
        value={selectedCharacter ?? ""}
        onChange={(e) => {
          onCharacterSelected(Number(e.target.value), index);
        }}
        className="px-4 py-4 border border-black"
      >
        <option value="" disabled>
          Selecciona un personaje
        </option>
        {characters?.map((character) => (
          <option key={character.id} value={character.id}>
            {character.name}
          </option>
        ))}
      </select>
    </div>
  );
}
