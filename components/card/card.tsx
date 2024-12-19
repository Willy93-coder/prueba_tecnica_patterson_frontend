type CardProps = {
  name: string;
  image: string;
};

export function Card({ name, image }: CardProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 w-[200px] border border-black-1 bg-white">
      <h2 className="text-lg line-clamp-2">{name}</h2>
      <img
        className="rounded-full w-[50px]"
        src={image}
        alt={`${name} character from Rick & Morty`}
      />
    </div>
  );
}
