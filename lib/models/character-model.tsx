export type CharacterModel = {
  id: number;
  name: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  gender: string;
  species: string;
  status: string;
  episode: string[];
};

export function mapToCharacterModel(data: any): CharacterModel {
  return {
    id: data.id,
    name: data.name,
    image: data.image,
    origin: {
      name: data.origin.name,
      url: data.origin.url,
    },
    gender: data.gender,
    species: data.species,
    status: data.status,
    episode: data.episode,
  };
}
