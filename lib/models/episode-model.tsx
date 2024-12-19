export type Episode = {
  id: number;
  name: string;
  characters: string[];
};

export function mapToEpisodeModel(data: any) {
  return {
    id: data.id,
    name: data.name,
    characters: data.characters,
  };
}
