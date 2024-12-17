export type CharacterCardProps = {
  name: string;
  image: string;
};

export function CharacterCard({ name, image }: CharacterCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 w-[200px] border border-black-1">
      <h2 className="text-lg">{name}</h2>
      <img
        className="rounded-full w-[50px]"
        src={image}
        alt={`${name} character from Rick & Morty`}
      />
    </div>
  );
}
